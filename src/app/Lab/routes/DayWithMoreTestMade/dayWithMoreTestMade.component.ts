import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ExamenService } from 'src/app/services/examenes/examen.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';


@Component({
  selector: 'app-createReport',
  templateUrl: './dayWithMoreTestMade.component.html',
  styleUrls: ['./dayWithMoreTestMade.component.css']
})

export class DayWithMoreTestMadeComponent implements OnInit{
  
  patient: ListaExamenes[]=[]
  columnas: string[] = ['dato', 'contador'];
  dataSource: any;

  constructor(private examenService: ExamenService,
    private usuarioService:UsuarioService) { }

  getId() {
    return Number(this.usuarioService.getUserId());
  }

  ngOnInit(): void {
    this.examenService.getDaysWithMoreTest(this.getId()).subscribe(
      res=>{
        console.log(res);
        this.patient = res;
        this.dataSource = new MatTableDataSource<ListaExamenes>(this.patient);
      }
    )

  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }
}

export class ListaExamenes{
  constructor(public dato:String, public contador:number){}
}
