import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
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
  apellido: string;
}

const ELEMENT_DATA: Patient[] = [
  {apellido: 'A1', name: 'Paciente 1'},
  {apellido: 'A2', name: 'Paciente 2'},
  {apellido: 'A3', name: 'Paciente 3'},
  {apellido: 'A4', name: 'Paciente 4'},
  {apellido: 'A5', name: 'Paciente 5'},
  {apellido: 'A6', name: 'Paciente 6'},
  {apellido: 'A7', name: 'Paciente 7'},
];

@Component({
  selector: 'app-createReport',
  templateUrl: './patientList.component.html',
  styleUrls: ['./patientList.component.css']
})

export class PatientListComponent {
hide = true;
 

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;


constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>){
  this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
}
  
  displayedColumns: string[] = ['name', 'apellido'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

