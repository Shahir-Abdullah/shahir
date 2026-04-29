import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PortfolioCard, Profile } from '../../models/portfolio.model';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  @Input({ required: true }) profile!: Profile;
  @Input({ required: true }) highlights: PortfolioCard[] = [];
}
