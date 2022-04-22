import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';
import { ExamenService } from 'src/app/services/examenes/examen.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-createReport',
  templateUrl: './uploadTest.component.html',
  styleUrls: ['./uploadTest.component.css']
})

export class UploadTestComponent {
hide = true;

patients: Examen[] = [];

constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>,
  private examenService: ExamenService,
  private usuarioService: UsuarioService
  ){
  this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
}

 profileForm = this.formBuilder.group({   
   nombre:[''],
   paciente:['']
 });
   
 
 saveForm(){
   console.log('Form data is ', this.profileForm.value);
 }
 

getId() {
  return Number(this.usuarioService.getUserId());
}

ngOnInit(): void {
  var id_doctor = this.getId();

  this.examenService.getTestToday(id_doctor).subscribe(
    res => {
      this.patients = res;      
      console.log(this.patients);
    }, error => {

    }
  )
}

 afuConfig = {
  formatsAllowed: ".jpg,.png,.pdf",
  uploadAPI: {
    url:"https://example-file-upload-api"
  },
  theme: "dragNDrop",
  hideProgressBar: true,
  hideResetBtn: true,
  replaceTexts: {
    selectFileBtn: 'Selecciona el archivo',
    resetBtn: 'Reset',
    uploadBtn: 'Cargar',
    dragNDropBox: 'Arrastra y suelta el archivo',
    attachPinBtn: 'Adjunta el documento',
    afterUploadMsg_success: 'Archivo cargado exitosamente',
    afterUploadMsg_error: 'La carga del archivo fallo',
    sizeLimit: 'Tamaño limite'
  }
};

}

export class Patients {
  constructor(public id: number, public codigo: string, public nombre: string) { }
}

export class Examen {
  constructor(public id: number, public paciente:Patients, public hora:Time) { }
}