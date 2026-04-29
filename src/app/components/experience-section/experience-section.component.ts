import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Experience } from '../../models/portfolio.model';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent {
  @Input({ required: true }) experience: Experience[] = [];
}
