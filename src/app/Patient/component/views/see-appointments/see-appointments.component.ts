import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, delay, finalize, map, startWith, switchMap, tap } from 'rxjs/operators';
import { CitaService } from 'src/app/services/cita/cita.service';
import { DoctorService } from 'src/app/services/doctores/doctor.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
@Component({
  selector: 'app-see-appointments',
  templateUrl: './see-appointments.component.html',
  styleUrls: ['./see-appointments.component.css']
})
export class SeeAppointmentsComponent implements OnInit, AfterViewInit {
  
  navigationSubscription;
  breakpoint = 3;
  doctor_id : any;
  start_date : any;
  end_date : any;
  hidepicture = false;
  fecha = new Date();
  filtroFecha!: FormGroup;
  title = "";
  url = "";
  appointments: any[];
  filteredDoctores: any;
  doctorFilter = new FormControl();
  upcoming: boolean;
  appointments_lenght: number;
  formatYmd = (date: { toISOString: () => string | any[]; }) => date.toISOString().slice(0, 10);
  

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private route: ActivatedRoute,
    private citaService: CitaService,
    private doctorService: DoctorService,
    public userService: UsuarioService
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });

  }
  initialiseInvites() {
    var params = (this.route.snapshot.params);
    this.title = params['type'];
    if (this.title == 'history') {
      this.title = 'Consultas Realizadas';
      this.url = 'assets/img/Consult2.png';
      this.upcoming = false;
      this.citaService.getRecordCitas(this.userService.getUserId(), this.paginator?.pageIndex ?? 0).subscribe(resp => {
        this.appointments = resp.content
      },
        error => {
          console.error(error);
        }
      );
      this.citaService.countRecordCitas(this.userService.getUserId()).subscribe(resp => {
        this.appointments_lenght = resp
      },
        error => {
          console.error(error);
        }
      );

    } else if (this.title == 'upcoming') {
      this.title = 'Proximas Consultas';
      this.url = 'assets/img/Consult4.png';
      this.upcoming = true;
      this.citaService.getUpcomingCitas(this.userService.getUserId(), this.paginator?.pageIndex ?? 0).subscribe(resp => {
        this.appointments = resp.content;
      },
        error => {
          console.error(error);
        }
      );
      this.citaService.countUpcomingCitas(this.userService.getUserId()).subscribe(resp => {
        this.appointments_lenght = resp
      },
        error => {
          console.error(error);
        }
      );
    }
  }
  ngOnInit() {
    this.doctorFilter.valueChanges.pipe(
      debounceTime(50),
      tap(() => {
        this.filteredDoctores = [];
      }),
      switchMap(value =>
        this.doctorService.filterDoctor(value, this.doctor_id).pipe(
          finalize(() => {
          }),
        )))
      .subscribe(data => {
        if (data == undefined) {
          this.filteredDoctores = []
        } else {
          this.filteredDoctores = data;
        }
      }
      )
  }
  updateIdDoctor(id: any) {
    this.doctor_id = id;
  }

  filtrar() {
    if (this.start_date != null && this.end_date != null && this.doctor_id != null) {
      var start_date_aux = this.formatYmd(this.start_date)
      var end_date_aux = this.formatYmd(this.end_date)
      this.citaService.filterCitasDateDoctor(this.userService.getUserId(), start_date_aux, end_date_aux, this.doctor_id, this.paginator?.pageIndex ?? 0).subscribe(resp => {
        this.appointments = resp.content;
      },
        error => {
          console.error(error);
        }
      );
      this.citaService.countfilterCitasDateDoctor(this.userService.getUserId(), start_date_aux, end_date_aux, this.doctor_id).subscribe(resp => {
        this.appointments_lenght = resp
      },
        error => {
          console.error(error);
        }
      );
    } else if (this.start_date != null && this.end_date != null && this.doctor_id == null) {
      var start_date_aux = this.formatYmd(this.start_date)
      var end_date_aux = this.formatYmd(this.end_date)
      this.citaService.filterCitasDate(this.userService.getUserId(), start_date_aux, end_date_aux, this.paginator?.pageIndex ?? 0).subscribe(resp => {
        this.appointments = resp.content;
      },
        error => {
          console.error(error);
        }
      );
      this.citaService.countfilterCitasDate(this.userService.getUserId(), start_date_aux, end_date_aux).subscribe(resp => {
        this.appointments_lenght = resp;
      },
        error => {
          console.error(error);
        }
      );
    } else if (this.start_date == null && this.end_date == null && this.doctor_id != null) {
      if (this.upcoming) {
        this.citaService.filterCitasDoctorUpcoming(this.userService.getUserId(), this.doctor_id, this.paginator?.pageIndex ?? 0).subscribe(resp => {
          this.appointments = resp.content;

        },
          error => {
            console.error(error);
          }
        );
        this.citaService.countfilterCitasDoctorUpcoming(this.userService.getUserId(), this.doctor_id).subscribe(resp => {
          this.appointments_lenght = resp;

        },
          error => {
            console.error(error);
          }
        );
      } else {
        this.citaService.filterCitasDoctorRecord(this.userService.getUserId(), this.doctor_id,this.paginator?.pageIndex ?? 0).subscribe(resp => {
          this.appointments = resp.content;

        },
          error => {
            console.error(error);
          }
        );
        this.citaService.countfilterCitasDoctorRecord(this.userService.getUserId(), this.doctor_id).subscribe(resp => {
          this.appointments_lenght = resp;

        },
          error => {
            console.error(error);
          }
        );
      }
    } else {
      if (this.upcoming) {
        this.citaService.getUpcomingCitas(this.userService.getUserId(), this.paginator?.pageIndex ?? 0).subscribe(resp => {
          this.appointments = resp.content;

        },
          error => {
            console.error(error);
          }
        );
        this.citaService.countUpcomingCitas(this.userService.getUserId()).subscribe(resp => {
          this.appointments_lenght = resp;

        },
          error => {
            console.error(error);
          }
        );
      } else {
        this.citaService.getRecordCitas(this.userService.getUserId(), this.paginator?.pageIndex ?? 0).subscribe(resp => {
          this.appointments = resp.content;

        },
          error => {
            console.error(error);
          }
        );
        this.citaService.countRecordCitas(this.userService.getUserId()).subscribe(resp => {
          this.appointments_lenght = resp;

        },
          error => {
            console.error(error);
          }
        );
      }

    }
  }

  ngAfterViewInit() {

    this.paginator.page.
      pipe(
        tap(() => {
          this.filtrar()
        }
        ))
      .subscribe();

    this.observer
      .observe(['(min-width: 1200px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 3;
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

          this.hidepicture = true;
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
