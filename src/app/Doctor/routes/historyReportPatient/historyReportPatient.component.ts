import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface Patient {
  date: string;
  description: string;
  doctor: string;
}

const ELEMENT_DATA: Patient[] = [
  {date:'28-02-2022', description: "Descripcion cita 1", doctor:'A'},
  {date:'20-02-2022', description: "Descripcion cita 2", doctor:'B'},
  {date:'12-02-2022', description: "Descripcion cita 3", doctor:'C'},
  {date:'04-02-2022', description: "Descripcion cita 4", doctor:'D'},
  {date:'26-01-2022', description: "Descripcion cita 5", doctor:'E'},
  {date:'18-01-2022', description: "Descripcion cita 6" ,doctor:'F'},
  {date:'10-01-2022', description: "Descripcion cita 7", doctor:'A'},
];

@Component({
  selector: 'app-createReport',
  templateUrl: './historyReportPatient.component.html',
  styleUrls: ['./historyReportPatient.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class HistoryReportPatientComponent{

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay: string[] = ['date', 'doctor'];
  expandedElement: Patient | null;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

