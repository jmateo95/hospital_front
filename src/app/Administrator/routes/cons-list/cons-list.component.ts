import { Component, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cons-list',
  templateUrl: './cons-list.component.html',
  styleUrls: ['./cons-list.component.css']
})
export class ConsListComponent implements OnInit {
  columnas: string[] = ['codigo', 'nombre', 'precio', 'editar'];
  datos: Articulo[] = [];
  dataSource:any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  ngOnInit() {
    for (let x = 1; x <= 100; x++)
      this.datos.push(new Articulo(x, `Consulta ${x}`, Math.trunc(Math.random() * 1000)));
    this.dataSource = new MatTableDataSource<Articulo>(this.datos);
    this.dataSource.paginator = this.paginator;
  }
}

export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
}
