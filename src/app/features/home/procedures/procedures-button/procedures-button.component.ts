import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-procedures-button',
  imports: [CommonModule],
  templateUrl: './procedures-button.component.html',
  styleUrl: './procedures-button.component.css',
})
export class ProceduresButtonComponent {
  @Input() Button_Text: string = '';
  @Input() Button_Color: string = '';
}
