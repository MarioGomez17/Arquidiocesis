import { Component, Input } from '@angular/core';
import { SocialNetworkLinkComponent } from '../social-network-link/social-network-link.component';

@Component({
  selector: 'app-social-networks',
  imports: [SocialNetworkLinkComponent],
  templateUrl: './social-networks.component.html',
  styleUrl: './social-networks.component.css',
})
export class SocialNetworksComponent {
  @Input() SocialNetworkColor: string = '';
}
