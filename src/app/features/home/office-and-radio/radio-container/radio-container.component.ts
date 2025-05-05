import { Component } from '@angular/core';
import { OfficeRadioTitleComponent } from '../office-radio-title/office-radio-title.component';
import { RadioCardComponent } from "../radio-card/radio-card.component";

@Component({
  selector: 'app-radio-container',
  imports: [OfficeRadioTitleComponent, RadioCardComponent],
  templateUrl: './radio-container.component.html',
  styleUrl: './radio-container.component.css',
})
export class RadioContainerComponent {}
