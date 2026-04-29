import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LinkCard } from '../../models/portfolio.model';

@Component({
  selector: 'app-info-deck',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './info-deck.component.html',
  styleUrls: ['./info-deck.component.scss']
})
export class InfoDeckComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) items: LinkCard[] = [];
}
