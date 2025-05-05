import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-office-card',
  imports: [CommonModule],
  templateUrl: './office-card.component.html',
  styleUrl: './office-card.component.css',
})
export class OfficeCardComponent {
  @Input() OfficeCard_Icon: string = '';
  @Input() OfficeCard_Title: string = '';
  @Input() OfficeCard_Description: string = '';
  @Input() OfficeCard_Color: string = '';
}
