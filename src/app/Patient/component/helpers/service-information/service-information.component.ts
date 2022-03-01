import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-service-information',
  templateUrl: './service-information.component.html',
  styleUrls: ['./service-information.component.css']
})
export class ServiceInformationComponent implements OnInit {
  type = "";
  id = 0;
  isExam = false;
  displayedColumns = ['position', 'name','pdf'];
  dataSource = ELEMENT_DATA;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    var params = (this.route.snapshot.params);
    this.id = params['id'];
    this.type = params['type'];
    if(this.type == 'appointment'){
      this.type = 'Consulta';
      this.isExam = false;
    }else{
      this.type = 'Examen';
      this.isExam = true;
    }
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
