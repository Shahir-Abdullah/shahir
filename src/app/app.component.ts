import { Component } from '@angular/core';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { SwipeCarouselComponent } from './components/swipe-carousel/swipe-carousel.component';
import { portfolioData } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContactSectionComponent,
    ExperienceSectionComponent,
    HeroSectionComponent,
    ProfileCardComponent,
    SiteHeaderComponent,
    SkillsSectionComponent,
    SwipeCarouselComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected readonly portfolio = portfolioData;
  protected readonly year = new Date().getFullYear();
}
