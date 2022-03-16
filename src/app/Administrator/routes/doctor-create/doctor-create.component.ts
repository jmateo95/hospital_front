import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';
import { AdministratorDoctorsService } from 'src/app/services/administrator-doctors.service';






/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})


export class DoctorCreateComponent implements OnInit{
hide = true;

constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>, private AdministratorDoctorsService: AdministratorDoctorsService){
  this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
}



 email = new FormControl('', [Validators.required, Validators.email]);
 
 profileForm = this.formBuilder.group({
   codigo:[''],
   nombre:[''],
   colegiado:[''],
   dpi:[''],
   telefono:[''],
   correo:this.email,
   password:[''],
   horai:[''],
   horaf:[''],
   fecha:['']
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

 ngOnInit(): void {
     console.log("Componente inicializado");
     this.AdministratorDoctorsService.getUsers()
      .subscribe((res)=>{
        console.log(res);
      });
 }

}
