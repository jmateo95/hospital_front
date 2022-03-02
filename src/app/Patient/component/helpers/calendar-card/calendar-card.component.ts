import { Component,  ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.css']
})
export class CalendarCardComponent {
  @ViewChild(MatSidenav)
  calendarnav!: MatSidenav;

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
   
    initialView: 'listWeek',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    events: [
      {
        "title": "Consulta Doc. Carlos Rojas",
        "start": "2022-03-02T10:00:00",
        "end": "2022-03-02"
      },
    ],
    locale: esLocale
   
  };

  constructor() { }

  

 

  
 

}
