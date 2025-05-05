import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-publication-card',
  imports: [],
  templateUrl: './publication-card.component.html',
  styleUrl: './publication-card.component.css',
})
export class PublicationCardComponent {
  @Input() Publication_Title: string = '';
}
