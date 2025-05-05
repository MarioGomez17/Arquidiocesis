import { Component } from '@angular/core';
import { PlanCardComponent } from "../plan-card/plan-card.component";

@Component({
  selector: 'app-plan-container',
  imports: [PlanCardComponent],
  templateUrl: './plan-container.component.html',
  styleUrl: './plan-container.component.css'
})
export class PlanContainerComponent {

}
