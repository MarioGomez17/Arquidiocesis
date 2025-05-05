import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-event-card',
  imports: [CommonModule],
  templateUrl: './calendar-event-card.component.html',
  styleUrl: './calendar-event-card.component.css',
})
export class CalendarEventCardComponent {
  @Input() CalendarEventCard_Title: string = '';
  @Input() CalendarEventCard_Description: string = '';
  @Input() CalendarEventCard_Date: Date = new Date();
  @Input() CalendarEventCard_Hour: string = '';
  @Input() CalendarEventCard_Place: string = '';
  @Input() CalendarEventCard_Color: string = '';
}
