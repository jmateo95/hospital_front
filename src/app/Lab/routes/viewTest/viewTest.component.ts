import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ExamenService } from 'src/app/services/examenes/examen.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';


@Component({
  selector: 'app-createReport',
  templateUrl: './viewTest.component.html',
  styleUrls: ['./viewTest.component.css']
})

export class ViewTestComponent implements OnInit {

  constructor(private examenService: ExamenService,
    private usuarioService: UsuarioService) { }

  columnas: string[] = ['hora', 'nombre'];
  examenes: Examen[] = [];
  dataSource: any;


  getId() {
    return Number(this.usuarioService.getUserId());
  }

  ngOnInit(): void {
    var id_doctor = this.getId();

    this.examenService.getTestToday(id_doctor).subscribe(
      res => {
        this.examenes = res;
        this.dataSource = new MatTableDataSource<Examen>(this.examenes);
      }
    )
  }
}

export class Patients {
  constructor(public id: number, public codigo: string, public nombre: string) { }
}

export class Examen {
  constructor(public id: number, public codigo: string, public costo: number, public orden: boolean, public description: string, public formatoInforma: string, public nombre: string) { }
}