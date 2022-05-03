import { Component, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TipoExamenService } from 'src/app/services/tipoExamenes/tipo-examenes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent {
  columnas: string[] = ['codigo', 'descripcion', 'costo', 'editar'];
  data: Examen[] = []
  dataSource:any;

  constructor(    
    private tipoExamenService: TipoExamenService,
    private toastrSvc: ToastrService   
    ) { }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  ngOnInit() {
    this.tipoExamenService.getAllTiposExamen().subscribe(
      res=>{        
        this.data = res["content"];  
        this.dataSource = new MatTableDataSource<Examen>(this.data);
        this.dataSource.paginator = this.paginator;      
      }
    )       
  }
}

export class Examen{
  constructor(public id: number, public codigo: string, public costo: number, public orden: boolean, public description: string, public formatoInforma: string, public nombre:string){}
}
