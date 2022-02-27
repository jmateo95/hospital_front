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
  selector: 'app-createReport',
  templateUrl: './uploadTest.component.html',
  styleUrls: ['./uploadTest.component.css']
})

export class UploadTestComponent {
hide = true;

patients = ['Jose', 'Andrea', 'David', 'Gabrihela'];
tests = ['test 1 ', 'test 2', 'test 3'];

constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>){
  this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
}

 profileForm = this.formBuilder.group({
   codigo:[''],
   nombre:[''],   
 });
   
 
 saveForm(){
   console.log('Form data is ', this.profileForm.value);
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
