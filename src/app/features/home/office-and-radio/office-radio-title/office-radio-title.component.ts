import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-office-radio-title',
  imports: [],
  templateUrl: './office-radio-title.component.html',
  styleUrl: './office-radio-title.component.css',
})
export class OfficeRadioTitleComponent {
  @Input() OfficeRadio_Title: string = '';
  @Input() OfficeRadio_Description: string = '';
}
