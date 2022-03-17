import { Component } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent {
hide = true;

patients = ['Jose', 'Andrea', 'David', 'Gabrihela'];
tests = ['test 1 ', 'test 2', 'test 3'];

constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>){
  this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
}
  


 profileForm = this.formBuilder.group({
   codigo:[''],
   nombre:[''],
   colegiado:[''],
   dpi:[''],
   telefono:[''],   
   password:[''],
   horai:[''],
   horaf:[''],
   fecha:['']
 });
   
 
 saveForm(){
   console.log('Form data is ', this.profileForm.value);
 }

}
