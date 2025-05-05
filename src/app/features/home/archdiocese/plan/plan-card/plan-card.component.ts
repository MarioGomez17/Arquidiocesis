import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  imports: [CommonModule],
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.css',
})
export class PlanCardComponent {
  @Input() PlanCard_Title: string = '';
  @Input() PlanCard_Description: string = '';
  @Input() PlanCard_Icon: string = '';
  @Input() PlanCard_Color: string = '';
}
