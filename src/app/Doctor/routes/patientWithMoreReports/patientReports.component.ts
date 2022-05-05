import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from 'src/app/services/pacientes/Patient.service';


@Component({
  selector: 'app-patientReports',
  templateUrl: './patientReports.component.html',
  styleUrls: ['./patientReports.component.css']
})

export class PatientReportsComponent implements OnInit {
  hide = true;
  patient: ListaPacientes[]=[]
  columnas: string[] = ['dato', 'contador'];
  dataSource: any;

  constructor(private formBuilder: FormBuilder, private dateAdapter: DateAdapter<Date>,
    private pacienteService: PatientService) {
    this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
  }


  ngOnInit(): void {
    this.pacienteService.top10PatientAppoiment().subscribe(
      res=>{
        console.log(res);
        this.patient = res;
        this.dataSource = new MatTableDataSource<ListaPacientes>(this.patient);
      }
    )

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }
}

export class ListaPacientes{
  constructor(public dato:String, public contador:number){}
}
