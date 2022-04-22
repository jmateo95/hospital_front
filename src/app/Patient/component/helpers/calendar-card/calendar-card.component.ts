import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Calendar, CalendarOptions, EventApi, FullCalendarComponent } from '@fullcalendar/angular';
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
export class CalendarCardComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav)
  calendarnav!: MatSidenav;

  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;
  
  events: any[] = [];
  tests: any;
  appointments: any;
  week = 0;
  id: any;

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    initialView: 'listWeek',
    locale: esLocale
  };

  constructor(
    private userService: UsuarioService,
    private citaService: CitaService,
    private testService: ExamenService) { }

  ngOnInit(): void {
    this.id = this.userService.getUserId();
    this.loadEventsBack();


  }


  loadEventsBack(): void {
    this.events = [];
    this.citaService.getWeekCitas(this.id, this.week).subscribe(
      (response) => {
        this.appointments = response;
        this.appointments.forEach((element: { especialidad: { nombre: string; }; fecha: string; hora: string; }) => {
          let aux = JSON.parse('{"title":"Cita ' + element.especialidad.nombre + '","start":"' + element.fecha + 'T' + element.hora + '","end":"' + element.fecha + '"}');
          this.events.push(aux)
        });
      },
      (error) => {
      }
    );
    this.testService.getWeekTest(this.id, this.week).subscribe(
      (response) => {
        this.tests = response;
        this.tests.forEach((element: { tipo: { nombre: string; }; fecha: string; hora: string; }) => {
          let aux = JSON.parse('{"title":"Examen ' + element.tipo.nombre + '","start":"' + element.fecha + 'T' + element.hora + '","end":"' + element.fecha + '"}');
          this.events.push(aux)
        });
      },
      (error) => {
      }
    );
    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'listWeek',
        weekends: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        locale: esLocale,
        events: this.events
      }
      this.fullcalendar.getApi().refetchEvents();
  }, 500);

  }

  loadEventsPrev() {
    this.week = this.week - 1
    this.loadEventsBack()

  }

  loadTodayEvents() {
    this.week = 0
    this.loadEventsBack()

  }

  loadEventsAfter() {
    this.week = this.week + 1
    this.loadEventsBack()

  }
  ngAfterViewInit(): void {
    var botonToday = document.getElementsByClassName("fc-today-button");
    if (botonToday) {
      botonToday[0].addEventListener('click', (e) => {
        this.loadTodayEvents()
      });
    }
    var botonPrev = document.getElementsByClassName("fc-prev-button");
    if (botonPrev) {
      botonPrev[0].addEventListener('click', (e) => {
        this.loadEventsPrev()
      });
    }
    var botonAfter = document.getElementsByClassName("fc-next-button");
    if (botonAfter) {
      botonAfter[0].addEventListener('click', (e) => {
        this.loadEventsAfter()
      });
    }
  }
}

