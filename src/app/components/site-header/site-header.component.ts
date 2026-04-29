import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent {
  @Input({ required: true }) nav: NavItem[] = [];

  protected menuOpen = false;

  protected toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  protected closeMenu(): void {
    this.menuOpen = false;
  }
}
