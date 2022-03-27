import { Component, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute , Router, ParamMap} from '@angular/router';
import { EspecialidadesService } from '../../../services/especialidades/especialidades.service';

@Component({
  selector: 'app-cons-list',
  templateUrl: './cons-list.component.html',
  styleUrls: ['./cons-list.component.css']
})
export class ConsListComponent implements OnInit {
  columnas: string[] = ['codigo', 'nombre', 'precio', 'editar'];
  datos: any[] = [];
  dataSource:any;
  
  constructor(
    private especialidadesService: EspecialidadesService,
    private toastrSvc:ToastrService,
    private route : ActivatedRoute, private router : Router
  ){}

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  ngOnInit() {
    this.especialidadesService.getAllEspecialidad().subscribe(
      resp=>{
        this.dataSource=(resp.content);
      },
      error=>{
        console.error(error);
      }
     );
  }

  deleteconsulta(id:any){
    this.especialidadesService.deleteEspecialidad(id).subscribe(
      res=>{
        this.toastrSvc.success(`Se elimino el tipo de consulta`);
        this.ngOnInit();
      },
      error=>{
        this.toastrSvc.error(`Hubo un error al eliminar la consulta`);
        console.error(error);
      }
    );
  }


}

export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
}
