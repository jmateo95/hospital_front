import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitaService } from 'src/app/services/cita/cita.service';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-service-information',
  templateUrl: './service-information.component.html',
  styleUrls: ['./service-information.component.css'],
})
export class ServiceInformationComponent implements OnInit {
  type = "";
  id = 0;
  isExam = false;
  displayedColumns = ['position', 'name','pdf'];
  dataSource = ELEMENT_DATA;
  dataInformation: any;
  
  constructor(
    private route: ActivatedRoute, 
    private location:Location, 
    private citaService : CitaService) { }

  ngOnInit(): void {
    var params = (this.route.snapshot.params);
    this.id = params['id'];
    this.type = params['type'];
    if(this.type == 'appointment'){
      this.type = 'Consulta';
      this.isExam = false;
      console.log(this.id)
      this.citaService.getCita(this.id).subscribe(resp => {
        this.dataInformation = resp;
      },
        error => {
          console.error(error);
        }
      );
    }else{
      this.type = 'Examen';
      this.isExam = true;
    }
  }

  back(): void {
    this.location.back()
  }


}

export interface Files {
  name: string;
  position: number;
  pdf: string;
}

const ELEMENT_DATA: Files[] = [
  {position: 1, name: 'Resultado Examen de Sangre' , pdf:'si' },
  {position: 2, name: 'Receta Medica', pdf:'si' },
  {position: 3, name: 'Orden de Examen Rayos X', pdf:'si'}
];

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
};