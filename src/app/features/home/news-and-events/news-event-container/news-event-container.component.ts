import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../../../components/section-title/section-title.component";
import { NewsEventCardComponent } from "../news-event-card/news-event-card.component";
import { PublicationCardComponent } from "../publication-card/publication-card.component";

@Component({
  selector: 'app-news-event-container',
  imports: [SectionTitleComponent, NewsEventCardComponent, PublicationCardComponent],
  templateUrl: './news-event-container.component.html',
  styleUrl: './news-event-container.component.css'
})
export class NewsEventContainerComponent {

}
