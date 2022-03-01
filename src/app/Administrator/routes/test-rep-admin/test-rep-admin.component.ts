import { BreakpointObserver } from '@angular/cdk/layout';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-test-rep-admin',
  templateUrl: './test-rep-admin.component.html',
  styleUrls: ['./test-rep-admin.component.css']
})
export class TestRepAdminComponent implements OnInit {
  breakpoint = 3;
  hidepicture = false;
  filtroFecha!: FormGroup;
  columnas: string[] = ['codigo', 'descripcion', 'total'];
  datos: Articulo[] = [];
  dataSource:any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  
  
  constructor(private observer: BreakpointObserver) { 
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.filtroFecha = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });
  }


  ngOnInit() {
    for (let x = 1; x <= 100; x++)
      this.datos.push(new Articulo(x, `Exámen ${x}`, Math.trunc(Math.random() * 1000)));
    this.dataSource = new MatTableDataSource<Articulo>(this.datos);
    this.dataSource.paginator = this.paginator;
  }
}

export class Articulo {
  constructor(public codigo: number, public descripcion: string, public total: number) {
  }
}