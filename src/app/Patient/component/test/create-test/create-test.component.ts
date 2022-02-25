import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  time = {hour: 13, minute: 30};
  controlTestType = new FormControl();
  controlDoctors = new FormControl();
  optionsTestType: string[] = ['Tomografia', 'Rayos x', 'Ultrasonido'];
  optionsDoctors: string[] = ['Dr. Jose Perez', 'Dra. Maria Mendez', 'Dra. Luisa Gonzalez'];
  filteredOptionsDoctors!: Observable<string[]>;
  filteredOptionsTestType!: Observable<string[]>;

constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>){
this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
}

appointmentForm = this.formBuilder.group({
  fecha:[''],
  hora:[''],
  especialidad:[''],
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
  this.filteredOptionsDoctors = this.controlDoctors.valueChanges.pipe(
    startWith(''),
    map(value => this._filter_doctors(value)),
  );
  this.filteredOptionsTestType = this.controlTestType.valueChanges.pipe(
    startWith(''),
    map(valued => this._filter_specialties(valued)),
  );
 
}

saveForm(){
  console.log('Form data is ', this.appointmentForm.value);
}
private _filter_specialties(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.optionsTestType.filter(option => option.toLowerCase().includes(filterValue));
}
private _filter_doctors(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.optionsDoctors.filter(optiond => optiond.toLowerCase().includes(filterValue));
}
}
