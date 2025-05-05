import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-church-card',
  imports: [],
  templateUrl: './church-card.component.html',
  styleUrl: './church-card.component.css',
})
export class ChurchCardComponent {
  @Input() CurchCard_Name: string = '';
  @Input() CurchCard_Location: string = '';
  @Input() CurchCard_description: string = '';
}