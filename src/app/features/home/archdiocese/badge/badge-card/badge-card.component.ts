import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge-card',
  imports: [CommonModule],
  templateUrl: './badge-card.component.html',
  styleUrl: './badge-card.component.css',
})
export class BadgeCardComponent {
  @Input() BadgeCardTitle: string = '';
  @Input() BadgeCardDescription: string = '';
  @Input() BadgeCardColor: string = '';
}

