import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';
import { DoctorService } from '../../../services/doctores/doctor.service'
import { DatePipe } from '@angular/common';



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

constructor(
  private formBuilder:FormBuilder, 
  private dateAdapter: DateAdapter<Date>,
  private doctorService: DoctorService
  ){

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

 ngOnInit(): void {
   this.doctorService.getAllDoctor().subscribe(resp=>{
     console.log(resp);
   },
   error=>{console.error(error)}
   );
    
}


  
 getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
 
 pipe = new DatePipe('en-US');
 saveForm(){
   console.log('Form data is ', this.profileForm.value);
   
   var fecha = parseInt(""+this.pipe.transform(this.profileForm.value.fecha, 'yyyyMMdd'),10);
   var horaInicio= parseInt((""+this.profileForm.value.horai).replace(":",""),10);
   var horaFin=    parseInt((""+this.profileForm.value.horaf).replace(":",""),10);

   var doctor = 
      {
        "colegiado": this.profileForm.value.colegiado,
        "fecha": fecha,
        "horaInicio": horaInicio,
        "horaFin": horaFin,
        "telefono": this.profileForm.value.telefono,
        "usuario": {
          "nombre": this.profileForm.value.nombre,
          "codigo": this.profileForm.value.codigo,
          "email": this.profileForm.value.correo,
          "password": this.profileForm.value.password,
          "dpi": this.profileForm.value.dpi
        }
      };
    console.log('Form data is ', doctor);

   this.doctorService.saveDoctor(doctor).subscribe(
    resp=>{
    },
    error=>{
      console.error(error);
    }
   );
 }
}