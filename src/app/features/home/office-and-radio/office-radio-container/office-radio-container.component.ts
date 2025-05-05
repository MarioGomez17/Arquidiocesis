import { Component } from '@angular/core';
import { OfficeContainerComponent } from "../office-container/office-container.component";
import { RadioContainerComponent } from "../radio-container/radio-container.component";

@Component({
  selector: 'app-office-radio-container',
  imports: [OfficeContainerComponent, RadioContainerComponent],
  templateUrl: './office-radio-container.component.html',
  styleUrl: './office-radio-container.component.css'
})
export class OfficeRadioContainerComponent {

}
