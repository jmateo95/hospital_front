import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';
import { CitaService } from 'src/app/services/cita/cita.service';
import { LaboratoristaService } from 'src/app/services/laboratoristas/laboratorista.service';
import { CitaExamenesService } from 'src/app/services/CitaExamenes/cita-examenes.service';
import { DoctorService } from 'src/app/services/doctores/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute , Router, ParamMap} from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';


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


export class AppointmentComponent implements OnInit{
hide = true;

citas: Cita[] = [];
labs: Laboratorista[] = []
doctor = ""


constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>,
  private laboratoristaService: LaboratoristaService,
  private citasService: CitaService,
  private toastrSvc: ToastrService,
  private citaExamen: CitaExamenesService,
  private doctorService : DoctorService,
  private route : ActivatedRoute, private router : Router,
  private usuarioService: UsuarioService
  ){
  this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
}
  


 profileForm = this.formBuilder.group({
   laboratorista:[''],
   paciente:[''],
   fecha:[''],
   hora:[''],
 });

 getId() {
  return Number(this.usuarioService.getUserId());
}

 ngOnInit(): void {      
     var id_doctor = this.getId();

     this.laboratoristaService.getAllLaboratoristas().subscribe(
       res=>{
        this.labs = res.content;         
       },error=>{

       }
     )
     this.citasService.getTodayDoctorAppoiment(id_doctor).subscribe(
       res=>{         
          this.citas = res;
          console.log(this.citas);
       },error=>{

       }
     )
 }
 
 saveForm(){
   console.log('Form data is ', this.profileForm.value.paciente);
   var cita = {
     "laboratorista": this.profileForm.value.laboratorista,
     "paciente": this.profileForm.value.paciente.paciente,     
     "fecha":this.profileForm.value.fecha,
     "hora":this.profileForm.value.hora+":00",
     "cita": this.profileForm.value.paciente
   }

   console.log("CITA:")
   console.log(cita);
   
   this.citaExamen.saveAppimentTest(cita).subscribe(
    res=>{
      this.toastrSvc.success(`cita agregada exitosamente`);
      this.router.navigate(['/doctor/home'])
     },
     error=>{
      this.toastrSvc.error(`Hubo un error al crear la cita`);
      console.error(error);
     }
   )
 }

}

export class Examen{
  constructor(public id: number, public codigo: string, public costo: number, public orden: boolean, public description: string, public formatoInforma: string, public nombre:string){}
}

export class Laboratorista{
  constructor(public id: number, public codigo: string, public tipoExamen: Examen){}
}

export class Patients{
  constructor(public id: number, public codigo: string, public nombre: string){}
}

export class Cita{
  constructor(public id: number, public paciente: Patients){}
}