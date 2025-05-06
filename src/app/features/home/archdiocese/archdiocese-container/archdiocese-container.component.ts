import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../components/section-title/section-title.component';
import { EpiscopologioContainerComponent } from '../episcopologio/episcopologio-container/episcopologio-container.component';
import { BadgeContainerComponent } from '../badge/badge-container/badge-container.component';
import { DocumentsContainerComponent } from '../documents/documents-container/documents-container.component';
import { ChurchsContainerComponent } from '../churchs/churchs-container/churchs-container.component';
import { PlanContainerComponent } from '../plan/plan-container/plan-container.component';

@Component({
  selector: 'app-archdiocese-container',
  imports: [
    CommonModule,
    SectionTitleComponent,
    EpiscopologioContainerComponent,
    BadgeContainerComponent,
    DocumentsContainerComponent,
    ChurchsContainerComponent,
    PlanContainerComponent,
  ],
  templateUrl: './archdiocese-container.component.html',
  styleUrl: './archdiocese-container.component.css',
})
export class ArchdioceseContainerComponent {
  activeTab = '1';
  tabs = [
    { id: '1', label: 'Episcopologio' },
    { id: '2', label: 'Escudo' },
    { id: '3', label: 'Documentos' },
    { id: '4', label: 'Parroquias' },
    { id: '5', label: 'Plan 2025 - 2030' },
  ];
}
