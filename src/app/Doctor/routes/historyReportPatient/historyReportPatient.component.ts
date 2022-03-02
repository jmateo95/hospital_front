import { BreakpointObserver } from '@angular/cdk/layout';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

export interface Patient {
  Fecha: string;
  Descripcion: string;
  Doctor: string;
}

const ELEMENT_DATA: Patient[] = [
  {Fecha:'28-02-2022', Descripcion: "Descripcion cita 1", Doctor:'A'},
  {Fecha:'20-02-2022', Descripcion: "Descripcion cita 2", Doctor:'B'},
  {Fecha:'12-02-2022', Descripcion: "Descripcion cita 3", Doctor:'C'},
  {Fecha:'04-02-2022', Descripcion: "Descripcion cita 4", Doctor:'D'},
  {Fecha:'26-01-2022', Descripcion: "Descripcion cita 5", Doctor:'E'},
  {Fecha:'18-01-2022', Descripcion: "Descripcion cita 6" ,Doctor:'F'},
  {Fecha:'10-01-2022', Descripcion: "Descripcion cita 7", Doctor:'A'},
];

@Component({
  selector: 'app-historyReportPatient',
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

export class HistoryReportPatientComponent implements OnInit{
  name_patient:string;
  
  breakpoint = 3;
  hidepicture = false;
  filtroFecha!: FormGroup;  

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay: string[] = ['Fecha', 'Doctor'];
  expandedElement: Patient | null;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private observer: BreakpointObserver, private route: ActivatedRoute) { 
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.filtroFecha = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    var params = (this.route.snapshot.params);
    this.name_patient = params['name_patient'];
    this.dataSource.paginator = this.paginator;
  }
}

