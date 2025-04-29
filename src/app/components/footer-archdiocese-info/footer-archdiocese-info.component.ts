import { Component } from '@angular/core';
import { SocialNetworksComponent } from '../social-networks/social-networks.component';
import { FooterTitileComponent } from '../footer-titile/footer-titile.component';

@Component({
  selector: 'app-footer-archdiocese-info',
  imports: [SocialNetworksComponent, FooterTitileComponent],
  templateUrl: './footer-archdiocese-info.component.html',
  styleUrl: './footer-archdiocese-info.component.css',
})
export class FooterArchdioceseInfoComponent {}
