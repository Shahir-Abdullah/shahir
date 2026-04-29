import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LinkCard, SkillGroup } from '../../models/portfolio.model';
import { InfoDeckComponent } from '../info-deck/info-deck.component';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [InfoDeckComponent, NgFor, SectionTitleComponent],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent {
  @Input({ required: true }) skillGroups: SkillGroup[] = [];
  @Input({ required: true }) education: LinkCard[] = [];
  @Input({ required: true }) practice: LinkCard[] = [];
  @Input({ required: true }) certificates: LinkCard[] = [];
  @Input({ required: true }) activities: LinkCard[] = [];
}
