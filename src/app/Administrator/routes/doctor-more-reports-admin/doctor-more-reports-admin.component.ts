import { BreakpointObserver } from '@angular/cdk/layout';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'doctor-more-reports-admin',
  templateUrl: './doctor-more-reports-admin.component.html',
  styleUrls: ['./doctor-more-reports-admin.component.css']
})
export class DoctorReportsAdminComponent implements OnInit {
  breakpoint = 3;
  hidepicture = false;
  filtroFecha!: FormGroup;
  columnas: string[] = ['codigo', 'descripcion', 'reportes'];
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
    for (let x = 1; x <= 10; x++)
      this.datos.push(new Articulo(x, `Doctor ${x}`, Math.trunc(Math.random() * 30)+1));
    this.dataSource = new MatTableDataSource<Articulo>(this.datos);
    this.dataSource.paginator = this.paginator;
  }
}

export class Articulo {
  constructor(public codigo: number, public descripcion: string, public reportes: number) {
  }
}