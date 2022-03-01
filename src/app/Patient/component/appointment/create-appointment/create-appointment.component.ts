import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import {map, startWith} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  doctor_name="";
  speciality="";
  time = {hour: 13, minute: 30};
    
  constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>, private route: ActivatedRoute){
  this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy

}
  
  appointmentForm = this.formBuilder.group({
    fecha:[''],
    hora:[''],
    especialidad:[''],
    doctor:['']
  });

  ngOnInit(): void {
    var params=(this.route.snapshot.params);
    this.speciality = params['speciality'];
  this.doctor_name = params['doctor'];
  }

  saveForm(){
    console.log('Form data is ', this.appointmentForm.value);
  }
 

}
