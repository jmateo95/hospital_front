import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-see-doctor-admin',
  templateUrl: './see-doctor-admin.component.html',
  styleUrls: ['./see-doctor-admin.component.css']
})
export class SeeDoctorAdminComponent implements OnInit {

  breakpoint = 3;
  cards = [
    { name: 'Dr. Fernando Robles', speciality: 'Pediatria', code:'1' },
    { name: 'Dr. Jose Perez', speciality: 'Medicina General', code:'2' },
    { name: 'Dra. Karla Batres', speciality: 'Odontologia', code:'3' },
    { name: 'Dra. Jimena Reyes', speciality: 'Neurologia' , code:'4'}
  ];
  constructor(private observer: BreakpointObserver) { }



  ngOnInit() {
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(min-width: 1200px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 3;
        }
      });
    this.observer
      .observe(['(max-width: 1200px) and (min-width: 925px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 2;
        }
      });

    this.observer
      .observe(['(max-width: 925px) and (min-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 1;
        }
      });
    this.observer
      .observe(['(max-width: 800px) and (min-width: 625px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 2;
        }
      });
    this.observer
      .observe(['(max-width: 625px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 1;
        }
      });

  }
}
