import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-titile',
  imports: [],
  templateUrl: './footer-titile.component.html',
  styleUrl: './footer-titile.component.css',
})
export class FooterTitileComponent {
  @Input() title: string = '';
}
