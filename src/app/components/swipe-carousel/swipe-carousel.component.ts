import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PortfolioCard } from '../../models/portfolio.model';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-swipe-carousel',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet, SectionTitleComponent],
  templateUrl: './swipe-carousel.component.html',
  styleUrls: ['./swipe-carousel.component.scss']
})
export class SwipeCarouselComponent {
  @Input({ required: true }) sectionId = '';
  @Input({ required: true }) eyebrow = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) items: PortfolioCard[] = [];

  @ViewChild('track') private track?: ElementRef<HTMLDivElement>;

  private isPointerDown = false;
  private startX = 0;
  private startScroll = 0;
  private dragDistance = 0;
  private preventNextClick = false;

  protected scroll(direction: -1 | 1): void {
    const element = this.track?.nativeElement;

    if (!element) {
      return;
    }

    element.scrollBy({
      left: direction * Math.max(320, element.clientWidth * 0.82),
      behavior: 'smooth'
    });
  }

  protected startDrag(event: PointerEvent): void {
    const element = this.track?.nativeElement;

    if (!element) {
      return;
    }

    this.isPointerDown = true;
    this.dragDistance = 0;
    this.startX = event.clientX;
    this.startScroll = element.scrollLeft;
    element.setPointerCapture(event.pointerId);
  }

  protected drag(event: PointerEvent): void {
    const element = this.track?.nativeElement;

    if (!this.isPointerDown || !element) {
      return;
    }

    const distance = event.clientX - this.startX;
    this.dragDistance = Math.max(this.dragDistance, Math.abs(distance));
    element.scrollLeft = this.startScroll - distance;
  }

  protected endDrag(event: PointerEvent): void {
    const element = this.track?.nativeElement;

    if (!element) {
      return;
    }

    if (this.dragDistance > 8) {
      this.preventNextClick = true;
      window.setTimeout(() => {
        this.preventNextClick = false;
      });
    }

    this.isPointerDown = false;
    element.releasePointerCapture(event.pointerId);
  }

  protected guardClick(event: MouseEvent): void {
    if (!this.preventNextClick) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
  }
}
