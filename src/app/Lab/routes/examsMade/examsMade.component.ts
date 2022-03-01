import { Component, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Patient {
  patient: string;
  hour: string;
  date: string;
}

const ELEMENT_DATA: Patient[] = [
  {hour: '14:00', patient: 'Paciente 1', date:'28-02-01'},
  {hour: '15:00', patient: 'Paciente 2', date:'28-02-01'},
  {hour: '16:00', patient: 'Paciente 3', date:'28-02-01'},
  {hour: '17:00', patient: 'Paciente 4', date:'28-02-01'},
  {hour: '18:00', patient: 'Paciente 5', date:'28-02-01'},
  {hour: '19:00', patient: 'Paciente 6', date:'28-02-01'},
  {hour: '20:00', patient: 'Paciente 7', date:'28-02-01'},
];

@Component({
  selector: 'app-cons-list',
  templateUrl: './examsMade.component.html',
  styleUrls: ['./examsMade.component.css']
})

export class ExamsMadeComponent {

  displayedColumns: string[] = ['hour', 'patient', 'date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
}
