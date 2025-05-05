import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../../../components/section-title/section-title.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { SocialNetworksContainerComponent } from "../social-networks-container/social-networks-container.component";
import { ContactInfoContainerComponent } from "../contact-info-container/contact-info-container.component";

@Component({
  selector: 'app-contact-container',
  imports: [SectionTitleComponent, ContactFormComponent, SocialNetworksContainerComponent, ContactInfoContainerComponent],
  templateUrl: './contact-container.component.html',
  styleUrl: './contact-container.component.css'
})
export class ContactContainerComponent {

}
