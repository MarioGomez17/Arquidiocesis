import { Component } from '@angular/core';
import { DocumentCardComponent } from "../document-card/document-card.component";

@Component({
  selector: 'app-documents-container',
  imports: [DocumentCardComponent],
  templateUrl: './documents-container.component.html',
  styleUrl: './documents-container.component.css',
})
export class DocumentsContainerComponent {}
