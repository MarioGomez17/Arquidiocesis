import { Component } from '@angular/core';
import { SocialNetworksComponent } from '../social-networks/social-networks.component';

@Component({
  selector: 'app-top-bar',
  imports: [SocialNetworksComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {}
