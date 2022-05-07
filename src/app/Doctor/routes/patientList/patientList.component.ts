import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PatientService } from 'src/app/services/pacientes/Patient.service';


@Component({
  selector: 'app-patientList',
  templateUrl: './patientList.component.html',
  styleUrls: ['./patientList.component.css']
})

export class PatientListComponent implements OnInit{
  hide = true;
  displayedColumns: string[] = ['nombre', 'email', 'editar'];
  dataSource: any;
  patient: Paciente[]=[]
  breakpoint = 3;
  hidepicture = false;
 

@ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private observer: BreakpointObserver,
    private pacienteService: PatientService
    ) { }


  ngOnInit() {
    this.pacienteService.allPatient().subscribe(
      res=>{
        console.log(res.content);
        this.patient = res.content;
        this.dataSource = new MatTableDataSource<Paciente>(res.content);
      }
    )
  }


  


}

export class Paciente{
  constructor(public nombre:String, public email:String){}
}