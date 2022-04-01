import { Component,  OnInit,  ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { MatSidenav } from '@angular/material/sidenav';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { CitaService } from 'src/app/services/cita/cita.service';
import { ExamenService } from 'src/app/services/examenes/examen.service';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.css']
})
export class CalendarCardComponent implements OnInit {
  @ViewChild(MatSidenav)
  calendarnav!: MatSidenav;

  events: any;
  tests: any;
  appointments: any;

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

  constructor( 
    private userService: UsuarioService,
    private citaService: CitaService,
    private testService: ExamenService) { }
  ngOnInit(): void {
    var id = this.userService.getUserId();
    this.citaService.getWeekCitas(id).subscribe(
      (response) => {
       this.appointments = response;
      },
      (error) => {
      }
    );
    this.testService.getWeekTest(id).subscribe(
      (response) => {
       this.tests = response;
      },
      (error) => {
      }
    );
    
  }

  

 

  
 

}
