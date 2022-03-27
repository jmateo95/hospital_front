import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
export class SeeAppointmentsComponent implements OnInit {
  breakpoint = 3;
  doctor_id :number;
  hidepicture = false;
  filtroFecha!: FormGroup;
  title = "";
  navigationSubscription;
  url = "";
  appointments: any; 
  start_date:any;
  end_date: any;
  filteredDoctores: any;
  doctorFilter = new FormControl();
  errorMsg: string;
  isLoading = false;
  formatYmd = (date: { toISOString: () => string | any[]; }) => date.toISOString().slice(0, 10);
   
  cards = [
    { code: '1',date: '12/05/2021', doctor: 'Dr. Fernado Rojas',type:'Pediatria' },
    { code: '2',date: '14/04/2021', doctor: 'Dr. Luis Juarez',type:'Odontologia' },
    { code: '3',date: '18/03/2021', doctor: 'Dra. Camila Estrada',type:'Consulta General' },
    { code: '4',date: '19/02/2021', doctor: 'Dra. Fernanda Carrillo',type:'Neurologia' }
  ];
  constructor(
    private observer: BreakpointObserver,
    private router: Router, 
    private route: ActivatedRoute,
    private citaService: CitaService,
    private doctorService: DoctorService,
    private userService: UsuarioService
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
    if(this.title == 'history'){
      this.title = 'Consultas Realizadas';
      this.url = 'assets/img/Consult2.png';
      this.citaService.getRecordCitas(this.userService.getUserId()).subscribe(resp => {
        console.log(resp);
        this.appointments = resp;
  
      },
        error => {
          console.error(error);
        }
      );

    }else if (this.title == 'upcoming'){
      this.title = 'Proximas Consultas';
      this.url = 'assets/img/Consult4.png';
      this.citaService.getUpcomingCitas(this.userService.getUserId()).subscribe(resp => {
        console.log(resp);
        this.appointments = resp;
  
      },
        error => {
          console.error(error);
        }
      );
    }
  }


  ngOnInit() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.filtroFecha = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });
    this.doctorFilter.valueChanges.pipe(
      debounceTime(50),
      tap(() => {
        this.filteredDoctores = [];
        this.errorMsg = "";
        this.isLoading = true;
      }),
      switchMap(value =>
        this.doctorService.filterDoctor(value,0).pipe(
          finalize(() => {
            this.isLoading = false;
          }),
        )))
      .subscribe(data => {
        if (data == undefined) {
          this.errorMsg = "Error";
          this.filteredDoctores = []

        } else {
         
          
          this.errorMsg = ""
          this.filteredDoctores = data;
        }
      }
    )

    
  }
  updateIdDoctor(id: number) {
    this.doctor_id = id;
  }

  filtrar(){
    if(this.start_date!=null || this.end_date!=null || this.doctor_id!=null){
      this.start_date = this.formatYmd(this.start_date)
    }
    if(this.end_date!=null){
      this.end_date = this.formatYmd(this.end_date)
    }
    if(this.doctor_id!=null){

    }
  }

  ngAfterViewInit() {
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
