import { BreakpointObserver } from '@angular/cdk/layout';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ExamenService } from 'src/app/services/examenes/examen.service';

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
  datos = [];
  dataSource:any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  formatYmd = (date: { toISOString: () => string | any[]; }) => date.toISOString().slice(0, 10);
  
  constructor(private observer: BreakpointObserver, private citasService: ExamenService) { 
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = (new Date(today.getFullYear(), today.getMonth()+1, 0)).getUTCDate();

    this.filtroFecha = new FormGroup({
      start: new FormControl(new Date(year, month, 1)),
      end: new FormControl(new Date(year, month,day)),
    });
  }


  ngOnInit() {
    var start=this.formatYmd(this.filtroFecha.value.start);
    var end=this.formatYmd(this.filtroFecha.value.end);
    console.log(start);
    console.log(end);
    this.citasService.getTestCosto(start, end).subscribe(
      res=>{         
        console.log(res);
        this.datos=res;
        this.dataSource = new MatTableDataSource<Articulo>(this.datos);
        this.dataSource.paginator = this.paginator;
      }
    );

  }

  filtrar(){
    this.ngOnInit()
  }


}

export class Articulo {
  constructor(public codigoUser: string, public idUser: number, public nombreUser: string, public totalCitas: number) {
  }
}