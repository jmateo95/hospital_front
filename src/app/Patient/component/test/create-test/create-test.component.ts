import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import {map, startWith} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  time = {hour: 13, minute: 30};
  type = "";

constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>, private route: ActivatedRoute){
this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
}

appointmentForm = this.formBuilder.group({
  fecha:[''],
  hora:[''],
  tipo:[''],
  doctor:['']
});

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

ngOnInit(): void {
  var params=(this.route.snapshot.params);
  this.type = params['type'];

 
}

saveForm(){
  console.log('Form data is ', this.appointmentForm.value);
}

}
