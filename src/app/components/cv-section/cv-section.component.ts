import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CvDocument } from '../../models/portfolio.model';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-cv-section',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './cv-section.component.html',
  styleUrls: ['./cv-section.component.scss']
})
export class CvSectionComponent implements OnChanges {
  @Input({ required: true }) cv!: CvDocument;

  protected safePdfUrl?: SafeResourceUrl;

  constructor(private readonly sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.cv.file);
  }
}
