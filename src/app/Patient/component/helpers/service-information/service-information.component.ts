import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita/cita.service';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ExamenService } from 'src/app/services/examenes/examen.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-service-information',
  templateUrl: './service-information.component.html',
  styleUrls: ['./service-information.component.css'],
})
export class ServiceInformationComponent implements OnInit {
  type = "";
  id = 0;
  isExam = false;
  displayedColumns = ['position','name', 'url'];
  data: Files[] = []
  dataSource:any;
  dataInformation: any;
  cita = true;
  navigationSubscription;
  index = 1;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private citaService: CitaService,
    private examenService: ExamenService,
    private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }
  initialiseInvites() {
    var params = (this.route.snapshot.params);
    this.id = params['id'];
    this.type = params['type'];
    if (this.type == 'appointment') {
      this.type = 'Consulta';
      this.isExam = false;
      this.citaService.getCita(this.id).subscribe(resp => {
        this.dataInformation = resp;
      },
        error => {
          console.error(error);
        }
      );
    } else {
      this.type = 'Examen';
      this.isExam = true;
      this.examenService.getExamen(this.id).subscribe(resp => {
        this.dataInformation = resp;
        if (this.dataInformation.ordenDoc) {
          this.data.push({name: 'Orden Doctor',position:this.index,url:this.dataInformation.ordenDoc})
          this.index++
        }
        
        this.dataSource = new MatTableDataSource<Files>(this.data);
      },
        error => {
          console.error(error);
        }
      );
    }
  }

  ngOnInit(): void {

  }

  back(): void {
    this.location.back()
  }


}

export interface Files {
  name: string;
  position: number;
  url: string;
}



export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
};