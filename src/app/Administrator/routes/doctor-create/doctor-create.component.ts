import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';
import { DoctorService } from '../../../services/doctores/doctor.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';


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
  private doctorService: DoctorService,
  private toastrSvc:ToastrService,
  private router : Router
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
   
    
}


  
 getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
 

 pipe = new DatePipe('en-US');
 saveForm(){
   var fecha = this.pipe.transform(this.profileForm.value.fecha, 'yyyy-MM-dd');
   var doctor = 
      {
        "colegiado": this.profileForm.value.colegiado,
        "fecha": fecha,
        "horaInicio": this.profileForm.value.horai,
        "horaFin": this.profileForm.value.horaf,
        "telefono": this.profileForm.value.telefono,
        "nombre": this.profileForm.value.nombre,
        "codigo": this.profileForm.value.codigo,
        "email": this.profileForm.value.correo,
        "password": this.profileForm.value.password,
        "dpi": this.profileForm.value.dpi    
      };

   this.doctorService.saveDoctor(doctor).subscribe(
    resp=>{
      this.toastrSvc.success(`Medico agregado exitosamente`);
      this.router.navigate(['/administrator/doctor/see'])
    }
   );
 }
}