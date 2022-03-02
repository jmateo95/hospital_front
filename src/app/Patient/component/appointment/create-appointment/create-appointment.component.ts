import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs/operators';
import { Location } from '@angular/common';


@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  hidepicture = false;
  doctor_name = "";
  speciality = "";
  time = { hour: 13, minute: 30 };

  constructor(private formBuilder: FormBuilder, private location: Location,private observer: BreakpointObserver, private dateAdapter: DateAdapter<Date>, private route: ActivatedRoute) {
    this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy

  }

  appointmentForm = this.formBuilder.group({
    fecha: [''],
    hora: [''],
    especialidad: [''],
    doctor: ['']
  });

  ngOnInit(): void {
    var params = (this.route.snapshot.params);
    this.speciality = params['speciality'];
    this.doctor_name = params['doctor'];
  }

  saveForm() {
    console.log('Form data is ', this.appointmentForm.value);
  }


  ngAfterViewInit() {
    this.observer
      .observe(['(min-width: 1200px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.hidepicture = false;
        }
      });
    this.observer
      .observe(['(max-width: 1200px) and (min-width: 925px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.hidepicture = false;
        }
      });

    this.observer
      .observe(['(max-width: 925px) and (min-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.hidepicture = false;
        }
      });
    this.observer
      .observe(['(max-width: 800px) and (min-width: 770px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {

          this.hidepicture = false;
        }
      });
    this.observer
      .observe(['(max-width: 770px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.hidepicture = true;
        }
      });

  }
  back(): void {
    this.location.back()
  }

}
