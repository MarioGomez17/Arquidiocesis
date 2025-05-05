import { Component } from '@angular/core';
import { ChurchCardComponent } from "../church-card/church-card.component";

@Component({
  selector: 'app-churchs-container',
  imports: [ChurchCardComponent],
  templateUrl: './churchs-container.component.html',
  styleUrl: './churchs-container.component.css'
})
export class ChurchsContainerComponent {

}
