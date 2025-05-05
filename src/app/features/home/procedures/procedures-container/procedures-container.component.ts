import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../../../components/section-title/section-title.component";
import { ProceduresCardComponent } from "../procedures-card/procedures-card.component";

@Component({
  selector: 'app-procedures-container',
  imports: [SectionTitleComponent, ProceduresCardComponent],
  templateUrl: './procedures-container.component.html',
  styleUrl: './procedures-container.component.css'
})
export class ProceduresContainerComponent {

}
