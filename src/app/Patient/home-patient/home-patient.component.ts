import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { CitaService } from 'src/app/services/cita/cita.service';
import { ExamenService } from 'src/app/services/examenes/examen.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {
  breakpoint = 4;
  hidepicture = false;
  usuario: any;
  next_appoint: number;
  next_test:number;
  constructor(
    private observer: BreakpointObserver, 
    private userService: UsuarioService,
    private citasService: CitaService,
    private examenService: ExamenService) { }

  ngOnInit(): void {
    var id = this.userService.getUserId();
    this.userService.getUserById(id).subscribe(
      (response) => {
        this.usuario = response;
      },
      (error) => {
      }
    );;

    this.citasService.countUpcomingCitas(id).subscribe(
      (response) => {
        this.next_appoint = response;
      },
      (error) => {
      }
    );;

    this.examenService.countUpcomingTests(id).subscribe(
      (response) => {
        this.next_test = response;
      },
      (error) => {
      }
    );;
  
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(min-width: 1200px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 4;
          this.hidepicture = false;
        }
      });
    this.observer
      .observe(['(max-width: 1200px) and (min-width: 925px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 2;
          this.hidepicture = false;
        }
      });

    this.observer
      .observe(['(max-width: 925px) and (min-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 1;
          this.hidepicture = true;
        }
      });
    this.observer
      .observe(['(max-width: 800px) and (min-width: 625px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 2;
          this.hidepicture = false;
        }
      });
    this.observer
      .observe(['(max-width: 625px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 1;
          this.hidepicture = true;
        }
      });

  }

}
