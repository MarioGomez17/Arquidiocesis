import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-event-card',
  imports: [],
  templateUrl: './news-event-card.component.html',
  styleUrl: './news-event-card.component.css',
})
export class NewsEventCardComponent {
  @Input() News_TItile: string = '';
  @Input() News_Description: string = '';
  @Input() News_Date: string = '';
}