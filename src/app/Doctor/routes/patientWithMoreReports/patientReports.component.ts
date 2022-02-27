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
  reports: number;
}

const ELEMENT_DATA: Patient[] = [
  {hour: '14:00', name: 'Paciente 1', reports:5},
  {hour: '15:00', name: 'Paciente 2', reports:3},
  {hour: '16:00', name: 'Paciente 3', reports:8},
  {hour: '17:00', name: 'Paciente 4', reports:7},
  {hour: '18:00', name: 'Paciente 5', reports:2},
  {hour: '19:00', name: 'Paciente 6', reports:15},
  {hour: '20:00', name: 'Paciente 7', reports:5},
];

@Component({
  selector: 'app-createReport',
  templateUrl: './patientReports.component.html',
  styleUrls: ['./patientReports.component.css']
})

export class PatientReportsComponent {
hide = true;
 

constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>){
  this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
}
  
  displayedColumns: string[] = ['name', 'reports'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }
}
