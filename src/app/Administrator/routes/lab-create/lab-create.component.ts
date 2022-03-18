import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { LaboratoristaService } from 'src/app/services/laboratoristas/laboratorista.service';
import { TipoExamenService } from 'src/app/services/tipoExamenes/tipo-examenes.service';
import { ToastrService } from 'ngx-toastr';


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
export class LabCreateComponent  implements OnInit{
  hide = true;
  
  constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>,
    private tipoExamenService: TipoExamenService,
    private laboratoristaService: LaboratoristaService,
    private toastrSvc: ToastrService   
    ){
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }
  
  examenes: Examen[] = []

   email = new FormControl('', [Validators.required, Validators.email]);
   profileForm = this.formBuilder.group({
     examen:[''],
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
  
   
   ngOnInit(): void {
    this.tipoExamenService.getAllTiposExamen().subscribe(
      res=>{        
        this.examenes = res["content"];                  
      },
      error=>{
        console.log(error);
      }
    )
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
     var laboratorista = {
        "nombre": this.profileForm.value.nombre,
        "codigo": this.profileForm.value.codigo,
        "email": 'l@gmail.com',
        "password": this.profileForm.value.password,
        "dpi": this.profileForm.value.dpi,
        "registro": this.profileForm.value.registro,
        "fecha_inicio": fecha,
        "telefono": this.profileForm.value.telefono, 
        "tipoExamen": this.profileForm.value.examen       
     }
     console.log(laboratorista);
     this.laboratoristaService.saveLaboratorista(laboratorista).subscribe(
       res=>{
        this.toastrSvc.success(`Medico agregado exitosamente`);
       },
       error=>{
        this.toastrSvc.error(`Hubo un error al añadir al medico`);
        console.error(error);
       }
     )
   }
  
   
  }

  export class Examen{
    constructor(public id: number, public codigo: string, public costo: number, public orden: boolean, public description: string, public formatoInforma: string, public nombre:string){}
  }
  
  
