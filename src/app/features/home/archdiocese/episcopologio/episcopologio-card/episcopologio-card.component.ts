import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-episcopologio-card',
  imports: [],
  templateUrl: './episcopologio-card.component.html',
  styleUrl: './episcopologio-card.component.css',
})
export class EpiscopologioCardComponent {
  @Input() Bishop_Name: string = '';
  @Input() Bishop_Duration: string = '';
}
