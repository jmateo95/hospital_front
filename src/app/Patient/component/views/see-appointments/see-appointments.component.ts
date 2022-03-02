import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-see-appointments',
  templateUrl: './see-appointments.component.html',
  styleUrls: ['./see-appointments.component.css']
})
export class SeeAppointmentsComponent implements OnInit {
  breakpoint = 3;
  hidepicture = false;
  filtroFecha!: FormGroup;
  title = "";
  navigationSubscription;
  url = "";
   
  cards = [
    { code: '1',date: '12/05/2021', doctor: 'Dr. Fernado Rojas',type:'Pediatria' },
    { code: '2',date: '14/04/2021', doctor: 'Dr. Luis Juarez',type:'Odontologia' },
    { code: '3',date: '18/03/2021', doctor: 'Dra. Camila Estrada',type:'Consulta General' },
    { code: '4',date: '19/02/2021', doctor: 'Dra. Fernanda Carrillo',type:'Neurologia' }
  ];
  constructor(private observer: BreakpointObserver,private router: Router, private route: ActivatedRoute) {
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
    if(this.title == 'history'){
      this.title = 'Consultas Realizadas';
      this.url = 'assets/img/Consult2.png';
    }else if (this.title == 'upcoming'){
      this.title = 'Proximas Consultas';
      this.url = 'assets/img/Consult4.png';
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
