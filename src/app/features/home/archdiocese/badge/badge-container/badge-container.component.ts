import { Component } from '@angular/core';
import { BadgeCardComponent } from '../badge-card/badge-card.component';

@Component({
  selector: 'app-badge-container',
  imports: [BadgeCardComponent],
  templateUrl: './badge-container.component.html',
  styleUrl: './badge-container.component.css',
})
export class BadgeContainerComponent {}
