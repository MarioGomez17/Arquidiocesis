import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-document-card',
  imports: [CommonModule],
  templateUrl: './document-card.component.html',
  styleUrl: './document-card.component.css',
})
export class DocumentCardComponent {
  @Input() DocumentCard_Title: string = '';
  @Input() DocumentCard_Description: string = '';
  @Input() DocumentCard_Color: string = '';
}