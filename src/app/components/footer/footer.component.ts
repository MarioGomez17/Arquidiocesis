import { Component } from '@angular/core';
import { FooterArchdioceseInfoComponent } from '../footer-archdiocese-info/footer-archdiocese-info.component';
import { FooterQuickLinksComponent } from '../footer-quick-links/footer-quick-links.component';
import { FooterServicesComponent } from '../footer-services/footer-services.component';
import { FooterNewsletterComponent } from '../footer-newsletter/footer-newsletter.component';

@Component({
  selector: 'app-footer',
  imports: [
    FooterArchdioceseInfoComponent,
    FooterQuickLinksComponent,
    FooterServicesComponent,
    FooterNewsletterComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
