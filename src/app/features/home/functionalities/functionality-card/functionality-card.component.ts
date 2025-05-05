import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-functionality-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './functionality-card.component.html',
  styleUrl: './functionality-card.component.css',
})
export class FunctionalityCardComponent {
  @Input() ClassColorCard: string = '';
  @Input() FuntionalityTitle: string = '';
  @Input() FuntionalityDescription: string = '';
  @Input() FuntionalityLinkText: string = '';
  @Input() FuntionalityLinkTo: string = '';
  @Input() FuntionalityClassIcon: string = '';
}
