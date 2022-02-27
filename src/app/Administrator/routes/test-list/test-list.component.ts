import { Component, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent {
  columnas: string[] = ['codigo', 'descripcion', 'precio', 'editar'];
  datos: Articulo[] = [];
  dataSource:any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  ngOnInit() {
    for (let x = 1; x <= 100; x++)
      this.datos.push(new Articulo(x, `Exámen ${x}`, Math.trunc(Math.random() * 1000)));
    this.dataSource = new MatTableDataSource<Articulo>(this.datos);
    this.dataSource.paginator = this.paginator;
  }
}

export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
}
