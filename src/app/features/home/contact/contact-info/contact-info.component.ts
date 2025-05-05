import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-info',
  imports: [CommonModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css',
})
export class ContactInfoComponent {
  @Input() ContactInfo_Title: string = '';
  @Input() ContactInfo_Description: string = '';
  @Input() ContactInfo_LinkText: string = '';
  @Input() ContactInfo_Link: string = '';
  @Input() ContactInfo_Icon: string = '';
}
