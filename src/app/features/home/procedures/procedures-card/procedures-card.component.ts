import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProceduresButtonComponent } from '../procedures-button/procedures-button.component';

@Component({
  selector: 'app-procedures-card',
  imports: [CommonModule, ProceduresButtonComponent],
  templateUrl: './procedures-card.component.html',
  styleUrl: './procedures-card.component.css',
})
export class ProceduresCardComponent {
  @Input() ProcedureCard_Title: string = '';
  @Input() ProcedureCard_Description: string = '';
  @Input() ProcedureCard_Duration: string = '';
  @Input() ProcedureCard_Icon: string = '';
  @Input() ProcedureCard_ButtonText: string = '';
  @Input() ProcedureCard_Color: string = '';
}
