import { NgFor, NgIf } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  ViewChild,
  ViewChildren,
  QueryList
} from '@angular/core';
import type { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import { CvDocument } from '../../models/portfolio.model';
import { SectionTitleComponent } from '../section-title/section-title.component';

type PdfJsLibrary = typeof import('pdfjs-dist');

@Component({
  selector: 'app-cv-section',
  standalone: true,
  imports: [NgFor, NgIf, SectionTitleComponent],
  templateUrl: './cv-section.component.html',
  styleUrls: ['./cv-section.component.scss']
})
export class CvSectionComponent implements AfterViewInit, OnChanges {
  @Input({ required: true }) cv!: CvDocument;
  @ViewChild('viewer') private viewer?: ElementRef<HTMLElement>;
  @ViewChildren('pageCanvas') private pageCanvases?: QueryList<ElementRef<HTMLCanvasElement>>;

  protected errorMessage = '';
  protected isLoading = true;
  protected pages: number[] = [];

  private pdfDocument?: PDFDocumentProxy;
  private pdfJs?: PdfJsLibrary;
  private renderToken = 0;
  private resizeTimer?: number;
  private viewReady = false;

  constructor(private readonly changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.viewReady = true;
    void this.loadPdf();
  }

  ngOnChanges(): void {
    if (this.viewReady) {
      void this.loadPdf();
    }
  }

  @HostListener('window:resize')
  protected queueResizeRender(): void {
    if (!this.pdfDocument) {
      return;
    }

    window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(() => {
      this.renderToken += 1;
      void this.renderPages(this.renderToken);
    }, 180);
  }

  private async loadPdf(): Promise<void> {
    if (!this.cv?.file) {
      return;
    }

    const token = this.renderToken + 1;
    this.renderToken = token;
    this.errorMessage = '';
    this.isLoading = true;
    this.pages = [];
    this.changeDetector.detectChanges();

    try {
      const pdfJs = await this.loadPdfJs();
      const loadingTask = pdfJs.getDocument(this.cv.file);
      const pdfDocument = await loadingTask.promise;

      if (token !== this.renderToken) {
        return;
      }

      this.pdfDocument = pdfDocument;
      this.pages = Array.from({ length: pdfDocument.numPages }, (_, index) => index + 1);
      this.isLoading = false;
      this.changeDetector.detectChanges();
      await this.renderPages(token);
    } catch {
      if (token !== this.renderToken) {
        return;
      }

      this.isLoading = false;
      this.errorMessage = 'The CV preview could not be loaded. Please use the download button.';
      this.changeDetector.detectChanges();
    }
  }

  private async loadPdfJs(): Promise<PdfJsLibrary> {
    if (!this.pdfJs) {
      this.pdfJs = await import('pdfjs-dist');
      this.pdfJs.GlobalWorkerOptions.workerSrc = new URL(
        'assets/pdf.worker.min.js',
        document.baseURI
      ).toString();
    }

    return this.pdfJs;
  }

  private async renderPages(token: number): Promise<void> {
    const canvases = this.pageCanvases?.toArray() ?? [];

    if (!this.pdfDocument || canvases.length === 0) {
      return;
    }

    for (let pageNumber = 1; pageNumber <= this.pdfDocument.numPages; pageNumber += 1) {
      if (token !== this.renderToken) {
        return;
      }

      const canvas = canvases[pageNumber - 1]?.nativeElement;

      if (!canvas) {
        continue;
      }

      const page = await this.pdfDocument.getPage(pageNumber);
      const baseViewport = page.getViewport({ scale: 1 });
      const pixelRatio = window.devicePixelRatio || 1;
      const targetWidth = this.getTargetPageWidth(baseViewport.width);
      const scale = targetWidth / baseViewport.width;
      const viewport = page.getViewport({ scale: scale * pixelRatio });
      const context = canvas.getContext('2d');

      if (!context) {
        continue;
      }

      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      canvas.style.width = `${Math.floor(viewport.width / pixelRatio)}px`;
      canvas.style.height = `${Math.floor(viewport.height / pixelRatio)}px`;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);

      await page.render({
        canvasContext: context,
        viewport
      }).promise;
    }
  }

  private getTargetPageWidth(pageWidth: number): number {
    const viewerWidth = this.viewer?.nativeElement.clientWidth ?? pageWidth;
    return Math.min(pageWidth, Math.max(260, viewerWidth - 32));
  }
}
