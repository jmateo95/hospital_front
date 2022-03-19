import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';
import { DoctorService } from '../../../../services/doctores/doctor.service'

@Component({
  selector: 'app-see-doctors',
  templateUrl: './see-doctors.component.html',
  styleUrls: ['./see-doctors.component.css']
})
export class SeeDoctorsComponent implements OnInit {
  breakpoint = 3;
  hidepicture = false;
  filtroFecha = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  doctors:any;
  constructor(private observer: BreakpointObserver, private doctorService: DoctorService) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.filtroFecha = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });


  }



  ngOnInit() {
    this.doctorService.getAllDoctor().subscribe(resp => {
      console.log(resp.content);
      this.doctors = resp.content;

    },
      error => {
        console.error(error);
      }
    );

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
