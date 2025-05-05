import { Component } from '@angular/core';
import { ContactInfoComponent } from "../contact-info/contact-info.component";

@Component({
  selector: 'app-contact-info-container',
  imports: [ContactInfoComponent],
  templateUrl: './contact-info-container.component.html',
  styleUrl: './contact-info-container.component.css'
})
export class ContactInfoContainerComponent {

}
