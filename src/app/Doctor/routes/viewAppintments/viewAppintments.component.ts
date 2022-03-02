import { Component } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';
import {MatTableDataSource} from '@angular/material/table';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface Patient {
  name: string;
  hour: string;
}

const ELEMENT_DATA: Patient[] = [
  {hour: '14:00', name: 'Paciente 1'},
  {hour: '15:00', name: 'Paciente 2'},
  {hour: '16:00', name: 'Paciente 3'},
  {hour: '17:00', name: 'Paciente 4'},
  {hour: '18:00', name: 'Paciente 5'},
  {hour: '19:00', name: 'Paciente 6'},
  {hour: '20:00', name: 'Paciente 7'},
];

@Component({
  selector: 'app-viewAppointment',
  templateUrl: './viewAppintments.component.html',
  styleUrls: ['./viewAppintments.component.css']
})

export class ViewAppointmentComponent {
hide = true;
 

constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>){
  this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
}
  
  displayedColumns: string[] = ['hour', 'demo-name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  /*applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }*/
}
