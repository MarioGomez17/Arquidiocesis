import { Component } from '@angular/core';
import { OfficeRadioTitleComponent } from '../office-radio-title/office-radio-title.component';
import { OfficeCardComponent } from '../office-card/office-card.component';

@Component({
  selector: 'app-office-container',
  imports: [OfficeRadioTitleComponent, OfficeCardComponent],
  templateUrl: './office-container.component.html',
  styleUrl: './office-container.component.css',
})
export class OfficeContainerComponent {}
