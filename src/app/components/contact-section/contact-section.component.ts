import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Profile, ProfileLink } from '../../models/portfolio.model';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  @Input({ required: true }) profile!: Profile;

  protected get contactLinks(): ProfileLink[] {
    return this.profile.links.filter((link) => Boolean(link.href));
  }
}
