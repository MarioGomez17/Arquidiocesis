import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../../../components/section-title/section-title.component';
import { CalendarEventCardComponent } from '../calendar-event-card/calendar-event-card.component';
import { CalendarEvent } from 'calendar-utils';
import { addMonths, subMonths } from 'date-fns';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';

@Component({
  selector: 'app-calendar-container',
  imports: [
    CommonModule,
    SectionTitleComponent,
    CalendarModule,
    CalendarEventCardComponent,
  ],
  templateUrl: './calendar-container.component.html',
  styleUrl: './calendar-container.component.css',
})
export class CalendarContainerComponent {
  viewDate: Date = new Date();

  prevMonth(): void {
    this.viewDate = subMonths(this.viewDate, 1);
  }
  nextMonth(): void {
    this.viewDate = addMonths(this.viewDate, 1);
  }

  get monthEvents(): CalendarEvent[] {
    return this.events.filter(
      (event) =>
        event.start.getMonth() === this.viewDate.getMonth() &&
        event.start.getFullYear() === this.viewDate.getFullYear()
    );
  }

  get randomColor(): string {
    let colors: string[] = ['BlueCard', 'CyanCard', 'YellowCard', 'GreenCard'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  events: CalendarEvent<CustomEvent>[] = [
    {
      id: 1,
      start: new Date(2025, 3, 6),
      title: 'Celebración Patronal',
      allDay: true,
      meta: {
        description:
          'Celebración en honor al santo patrono de nuestra arquidiócesis con diversas actividades.',
        place: 'Catedral Principal',
        hour: '10:00 AM - 6:00 PM',
      },
    },
    {
      id: 2,
      start: new Date(2025, 3, 9),
      title: 'Retiro Espiritual',
      allDay: true,
      meta: {
        description:
          'Jornada de reflexión y oración para jóvenes y adultos de la comunidad.',
        place: 'Centro Pastoral',
        hour: '9:00 AM - 4:00 PM',
      },
    },
    {
      id: 3,
      start: new Date(2025, 3, 17),
      title: 'Formación Catequistas',
      allDay: true,
      meta: {
        description:
          'Taller de formación para catequistas y agentes de pastoral de todas las parroquias.',
        place: 'Salón Arquidiocesano',
        hour: '2:00 PM - 6:00 PM',
      },
    },
    {
      id: 4,
      start: new Date(2025, 3, 23),
      title: 'Celebración Patronal',
      allDay: true,
      meta: {
        description:
          'Celebración en honor al santo patrono de nuestra arquidiócesis con diversas actividades.',
        place: 'Catedral Principal',
        hour: '10:00 AM - 6:00 PM',
      },
    },
    {
      id: 5,
      start: new Date(2025, 3, 4),
      title: 'Retiro Espiritual',
      allDay: true,
      meta: {
        description:
          'Jornada de reflexión y oración para jóvenes y adultos de la comunidad.',
        place: 'Centro Pastoral',
        hour: '9:00 AM - 4:00 PM',
      },
    },
    {
      id: 6,
      start: new Date(2025, 4, 7),
      title: 'Formación Catequistas',
      allDay: true,
      meta: {
        description:
          'Taller de formación para catequistas y agentes de pastoral de todas las parroquias.',
        place: 'Salón Arquidiocesano',
        hour: '2:00 PM - 6:00 PM',
      },
    },
    {
      id: 7,
      start: new Date(2025, 4, 5),
      title: 'Celebración Patronal',
      allDay: true,
      meta: {
        description:
          'Celebración en honor al santo patrono de nuestra arquidiócesis con diversas actividades.',
        place: 'Catedral Principal',
        hour: '10:00 AM - 6:00 PM',
      },
    },
    {
      id: 8,
      start: new Date(2025, 4, 26),
      title: 'Retiro Espiritual',
      allDay: true,
      meta: {
        description:
          'Jornada de reflexión y oración para jóvenes y adultos de la comunidad.',
        place: 'Centro Pastoral',
        hour: '9:00 AM - 4:00 PM',
      },
    },
    {
      id: 9,
      start: new Date(2025, 4, 28),
      title: 'Formación Catequistas',
      allDay: true,
      meta: {
        description:
          'Taller de formación para catequistas y agentes de pastoral de todas las parroquias.',
        place: 'Salón Arquidiocesano',
        hour: '2:00 PM - 6:00 PM',
      },
    },
    {
      id: 10,
      start: new Date(2025, 4, 30),
      title: 'Celebración Patronal',
      allDay: true,
      meta: {
        description:
          'Celebración en honor al santo patrono de nuestra arquidiócesis con diversas actividades.',
        place: 'Catedral Principal',
        hour: '10:00 AM - 6:00 PM',
      },
    },
    {
      id: 11,
      start: new Date(2025, 5, 2),
      title: 'Retiro Espiritual',
      allDay: true,
      meta: {
        description:
          'Jornada de reflexión y oración para jóvenes y adultos de la comunidad.',
        place: 'Centro Pastoral',
        hour: '9:00 AM - 4:00 PM',
      },
    },
    {
      id: 12,
      start: new Date(2025, 5, 6),
      title: 'Formación Catequistas',
      allDay: true,
      meta: {
        description:
          'Taller de formación para catequistas y agentes de pastoral de todas las parroquias.',
        place: 'Salón Arquidiocesano',
        hour: '2:00 PM - 6:00 PM',
      },
    },
    {
      id: 13,
      start: new Date(2025, 5, 13),
      title: 'Celebración Patronal',
      allDay: true,
      meta: {
        description:
          'Celebración en honor al santo patrono de nuestra arquidiócesis con diversas actividades.',
        place: 'Catedral Principal',
        hour: '10:00 AM - 6:00 PM',
      },
    },
    {
      id: 14,
      start: new Date(2025, 5, 19),
      title: 'Retiro Espiritual',
      allDay: true,
      meta: {
        description:
          'Jornada de reflexión y oración para jóvenes y adultos de la comunidad.',
        place: 'Centro Pastoral',
        hour: '9:00 AM - 4:00 PM',
      },
    },
    {
      id: 15,
      start: new Date(2025, 5, 25),
      title: 'Formación Catequistas',
      allDay: true,
      meta: {
        description:
          'Taller de formación para catequistas y agentes de pastoral de todas las parroquias.',
        place: 'Salón Arquidiocesano',
        hour: '2:00 PM - 6:00 PM',
      },
    },
    {
      id: 16,
      start: new Date(2025, 6, 3),
      title: 'Celebración Patronal',
      allDay: true,
      meta: {
        description:
          'Celebración en honor al santo patrono de nuestra arquidiócesis con diversas actividades.',
        place: 'Catedral Principal',
        hour: '10:00 AM - 6:00 PM',
      },
    },
    {
      id: 17,
      start: new Date(2025, 6, 11),
      title: 'Retiro Espiritual',
      allDay: true,
      meta: {
        description:
          'Jornada de reflexión y oración para jóvenes y adultos de la comunidad.',
        place: 'Centro Pastoral',
        hour: '9:00 AM - 4:00 PM',
      },
    },
    {
      id: 18,
      start: new Date(2025, 6, 17),
      title: 'Formación Catequistas',
      allDay: true,
      meta: {
        description:
          'Taller de formación para catequistas y agentes de pastoral de todas las parroquias.',
        place: 'Salón Arquidiocesano',
        hour: '2:00 PM - 6:00 PM',
      },
    },
    {
      id: 19,
      start: new Date(2025, 6, 25),
      title: 'Celebración Patronal',
      allDay: true,
      meta: {
        description:
          'Celebración en honor al santo patrono de nuestra arquidiócesis con diversas actividades.',
        place: 'Catedral Principal',
        hour: '10:00 AM - 6:00 PM',
      },
    },
    {
      id: 20,
      start: new Date(2025, 6, 28),
      title: 'Retiro Espiritual',
      allDay: true,
      meta: {
        description:
          'Jornada de reflexión y oración para jóvenes y adultos de la comunidad.',
        place: 'Centro Pastoral',
        hour: '9:00 AM - 4:00 PM',
      },
    },
  ];
}

interface CustomEvent {
  description: string;
  place: string;
  hour: string;
}