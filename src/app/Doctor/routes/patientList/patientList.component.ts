import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PatientService } from 'src/app/services/pacientes/Patient.service';

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
  selector: 'app-patientList',
  templateUrl: './patientList.component.html',
  styleUrls: ['./patientList.component.css']
})

export class PatientListComponent implements OnInit{
  hide = true;
 

@ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'apellido', 'editar'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  breakpoint = 3;
  cards = [
    { title: 'Title 1', content: 'Content 1' },
    { title: 'Title 2', content: 'Content 2' },
    { title: 'Title 3', content: 'Content 3' },
    { title: 'Title 4', content: 'Content 4' }
  ];
  hidepicture = false;
  filtroFecha!: FormGroup;
  controlTipoExamen = new FormControl();
  optionsTipoExamen: string[] = ['Rayos X', 'Ultrasonido', 'Examen de Sangre'];
  filteredOptionsTipoExamen!: Observable<string[]>;
  constructor(private observer: BreakpointObserver) { }


  ngOnInit() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.filtroFecha = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });
    this.filteredOptionsTipoExamen = this.controlTipoExamen.valueChanges.pipe(
      startWith(''),
      map(value => this._filter_doctors(value)),
    );
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.observer
      .observe(['(min-width: 1200px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 3;
          this.hidepicture = false;
        }
      });
    this.observer
      .observe(['(max-width: 1200px) and (min-width: 925px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 2;
          this.hidepicture = false;
        }
      });

    this.observer
      .observe(['(max-width: 925px) and (min-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 1;
          this.hidepicture = true;
        }
      });
    this.observer
      .observe(['(max-width: 800px) and (min-width: 625px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 2;
          
          this.hidepicture = true;
        }
      });
    this.observer
      .observe(['(max-width: 625px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 1;
          this.hidepicture = true;
        }
      });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    console.log(filterValue);
  }

  private _filter_doctors(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.optionsTipoExamen.filter(optiond => optiond.toLowerCase().includes(filterValue));
  }
}

