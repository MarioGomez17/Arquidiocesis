import { Component } from '@angular/core';
import { FunctionalitiesContainerComponent } from "../../features/home/functionalities/functionalities-container/functionalities-container.component";
import { ArchdioceseContainerComponent } from "../../features/home/archdiocese/archdiocese-container/archdiocese-container.component";
import { ProceduresContainerComponent } from "../../features/home/procedures/procedures-container/procedures-container.component";
import { CalendarContainerComponent } from "../../features/home/calendar-events/calendar-container/calendar-container.component";
import { NewsEventContainerComponent } from "../../features/home/news-and-events/news-event-container/news-event-container.component";
import { ContactContainerComponent } from "../../features/home/contact/contact-container/contact-container.component";
import { OfficeRadioContainerComponent } from "../../features/home/office-and-radio/office-radio-container/office-radio-container.component";

@Component({
  selector: 'app-home-view',
  imports: [FunctionalitiesContainerComponent, ArchdioceseContainerComponent, ProceduresContainerComponent, CalendarContainerComponent, NewsEventContainerComponent, ContactContainerComponent, OfficeRadioContainerComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css',
})
export class HomeViewComponent {}
