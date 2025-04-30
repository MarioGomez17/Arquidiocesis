import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-network-link',
  imports: [CommonModule],
  templateUrl: './social-network-link.component.html',
  styleUrl: './social-network-link.component.css',
})
export class SocialNetworkLinkComponent {
  @Input() SocialNetworkIcon: string = '';
  @Input() SocialNetworkLink: string = '';
  @Input() SocialNetworkAriaLabel: string = '';
}
