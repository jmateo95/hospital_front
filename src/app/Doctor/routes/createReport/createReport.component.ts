import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';
import { CitaService } from 'src/app/services/cita/cita.service';
import { InformeService } from 'src/app/services/Informe/informe.service';
import { ActivatedRoute , Router, ParamMap} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-createReport',
  templateUrl: './createReport.component.html',
  styleUrls: ['./createReport.component.css']
})

export class CreateReportComponent implements OnInit{
hide = true;

citas: Cita[] = [];

constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>,
  private citasService: CitaService,
  private informeService: InformeService,
  private route : ActivatedRoute, private router : Router,
  private toastrSvc: ToastrService,
  ){
  this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
}
  

 profileForm = this.formBuilder.group({
   paciente:[''],
   descripcion:[''],
 });
   

 ngOnInit(): void {
  let id_doctor = 80;
  this.citasService.getTodayDoctorAppoiment(id_doctor).subscribe(
    res=>{         
       this.citas = res;
       console.log(this.citas);
    },error=>{

    }
  )
 }
 
 saveForm(){
   var informe = {
     "cita": this.profileForm.value.paciente,
     "descripcion": this.profileForm.value.descripcion
   }
   console.log(informe);

   this.informeService.saveReport(informe).subscribe(
     res=>{
      this.toastrSvc.success(`Informe guardado exitosamente`);
      this.router.navigate(['/doctor/home'])
     },
     error=>{
      this.toastrSvc.error(`Hubo un error al crear el informe`);
      console.error(error);
     }
   )
 }

}

export class Patients{
  constructor(public id: number, public codigo: string, public nombre: string){}
}

export class Cita{
  constructor(public id: number, public paciente: Patients){}
}