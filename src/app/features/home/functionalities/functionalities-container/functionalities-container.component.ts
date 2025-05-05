import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../../../components/section-title/section-title.component";
import { FunctionalityCardComponent } from "../functionality-card/functionality-card.component";

@Component({
  selector: 'app-functionalities-container',
  imports: [SectionTitleComponent, FunctionalityCardComponent],
  templateUrl: './functionalities-container.component.html',
  styleUrl: './functionalities-container.component.css'
})
export class FunctionalitiesContainerComponent {

}
