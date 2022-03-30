import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, delay, finalize, map, startWith, switchMap, tap } from 'rxjs/operators';
import { ExamenService } from 'src/app/services/examenes/examen.service';
import { TipoExamenService } from 'src/app/services/tipoExamenes/tipo-examenes.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-see-tests',
  templateUrl: './see-tests.component.html',
  styleUrls: ['./see-tests.component.css']
})
export class SeeTestsComponent implements OnInit, AfterViewInit {
  title = "";
  breakpoint = 3;
  hidepicture = false;
  image = "";
  filtroFecha!: FormGroup;
  navigationSubscription: any;
  tests: any;
  fecha = new Date();
  upcoming: boolean;
  start_date = null;
  end_date = null;
  tipo_id = null;
  filteredTipoExamen: any;
  tipoExamenFilter = new FormControl();
  errorMsg: string;
  isLoading = false;
  tests_lenght: number;
  formatYmd = (date: { toISOString: () => string | any[]; }) => date.toISOString().slice(0, 10);

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private route: ActivatedRoute,
    private testService: ExamenService,
    private userService: UsuarioService,
    private tipoTestService: TipoExamenService
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });

  }
  initialiseInvites() {
    var params = (this.route.snapshot.params);
    this.title = params['type'];
    if (this.title == 'history') {
      this.title = 'Examenes Realizados';
      this.image = "assets/img/Test2.png";
      this.upcoming = false;
      this.testService.getRecordTest(this.userService.getUserId(), this.paginator?.pageIndex ?? 0).subscribe(resp => {
        this.tests = resp.content;
      },
        error => {
          console.error(error);
        }
      );
      this.testService.countRecordTests(this.userService.getUserId()).subscribe(resp => {
        this.tests_lenght = resp
      },
        error => {
          console.error(error);
        }
      );

    } else if (this.title == 'upcoming') {
      this.title = 'Proximos Examenes';
      this.image = "assets/img/Test.png";
      this.upcoming = true;
      this.testService.getUpcomingTest(this.userService.getUserId(), this.paginator?.pageIndex ?? 0).subscribe(resp => {
        this.tests = resp.content;
      },
        error => {
          console.error(error);
        }
      );
      this.testService.countUpcomingTests(this.userService.getUserId()).subscribe(resp => {
        this.tests_lenght = resp
      },
        error => {
          console.error(error);
        }
      );
    }
  }

  ngOnInit() {


    this.tipoExamenFilter.valueChanges.pipe(
      debounceTime(50),
      tap(() => {
        this.filteredTipoExamen = [];
        this.errorMsg = "";
        this.isLoading = true;
      }),
      switchMap(value =>
        this.tipoTestService.filterTipoExamen(value).pipe(
          finalize(() => {
            this.isLoading = false;
          }),
        )))
      .subscribe(data => {
        if (data == undefined) {
          console.log("error");
          this.errorMsg = "Error";
          this.filteredTipoExamen = []

        } else {
          console.log(data);
          this.errorMsg = ""
          this.filteredTipoExamen = data;
        }
      }
      )

  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  updateIdTipo(id: any) {
    this.tipo_id = id;
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

  filtrar() {
    if (this.start_date != null && this.end_date != null && this.tipo_id != null) {
      var start_date_aux = this.formatYmd(this.start_date)
      var end_date_aux = this.formatYmd(this.end_date)
      this.testService.filterTestsDateTipo(this.userService.getUserId(), start_date_aux, end_date_aux, this.tipo_id, this.paginator?.pageIndex ?? 0).subscribe(resp => {
        this.tests = resp.content;
      },
        error => {
          console.error(error);
        }
      );
    } else if (this.start_date != null && this.end_date != null && this.tipo_id == null) {
      var start_date_aux = this.formatYmd(this.start_date)
      var end_date_aux = this.formatYmd(this.end_date)
      this.testService.filterTestsDate(this.userService.getUserId(), start_date_aux, end_date_aux, this.paginator?.pageIndex ?? 0).subscribe(resp => {
        this.tests = resp.content;
      },
        error => {
          console.error(error);
        }
      ); this.testService.countfilterTestsDate(this.userService.getUserId(), start_date_aux, end_date_aux).subscribe(resp => {
        this.tests_lenght = resp
      },
        error => {
          console.error(error);
        }
      );
    } else if (this.start_date == null && this.end_date == null && this.tipo_id != null) {
      if (this.upcoming) {
        this.testService.filterTestsTipoUpcoming(this.userService.getUserId(), this.tipo_id, this.paginator?.pageIndex ?? 0).subscribe(resp => {
          this.tests = resp.content;

        },
          error => {
            console.error(error);
          }
        );
        this.testService.countfilterTestsTipoUpcoming(this.userService.getUserId(), this.tipo_id).subscribe(resp => {
          this.tests_lenght = resp
        },
          error => {
            console.error(error);
          }
        );
      } else {
        this.testService.filterTestsTipoRecord(this.userService.getUserId(), this.tipo_id, this.paginator?.pageIndex ?? 0).subscribe(resp => {
          this.tests = resp.content;

        },
          error => {
            console.error(error);
          }
        );
        this.testService.countfilterTestsTipoRecord(this.userService.getUserId(), this.tipo_id).subscribe(resp => {
          this.tests_lenght = resp
        },
          error => {
            console.error(error);
          }
        );
      }
    } else {
      if (this.upcoming) {
        this.testService.getUpcomingTest(this.userService.getUserId(), this.paginator?.pageIndex ?? 0).subscribe(resp => {
          this.tests = resp.content;

        },
          error => {
            console.error(error);
          }
        );
        this.testService.countUpcomingTests(this.userService.getUserId()).subscribe(resp => {
          this.tests_lenght = resp
        },
          error => {
            console.error(error);
          }
        );
      } else {
        this.testService.getRecordTest(this.userService.getUserId(), this.paginator?.pageIndex ?? 0).subscribe(resp => {
          this.tests = resp.content;

        },
          error => {
            console.error(error);
          }
        );
        this.testService.countRecordTests(this.userService.getUserId()).subscribe(resp => {
          this.tests_lenght = resp
        },
          error => {
            console.error(error);
          }
        );
      }

    }
  }



}
