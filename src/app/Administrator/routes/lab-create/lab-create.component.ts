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
  selector: 'app-lab-create',
  templateUrl: './lab-create.component.html',
  styleUrls: ['./lab-create.component.css']
})
export class LabCreateComponent  {
  hide = true;
  
  constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>){
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }
  
   email = new FormControl('', [Validators.required, Validators.email]);
   profileForm = this.formBuilder.group({
     codigo:[''], 
     nombre:[''],
     registro:[''],
     dpi:[''],
     telefono:[''],
     correo:this.email,
     password:[''],
     fecha:[''],
     dia1:[''],
     dia2:[''],
     dia3:[''],
     dia4:[''],
     dia5:[''],
   });
  
   
    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
   
   saveForm(){
     console.log('Form data is ', this.profileForm.value);
   }
  
  }
  
