import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecialidadesService } from '../../../services/especialidades/especialidades.service';
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cons-edit',
  templateUrl: './cons-edit.component.html',
  styleUrls: ['./cons-edit.component.css']
})
export class ConsEditComponent implements OnInit {
  id="";
  especialidad:any;
  
  constructor(
    private route:ActivatedRoute,
    private especialidadesService:EspecialidadesService,
    private formBuilder:FormBuilder, 
    private toastrSvc:ToastrService,
    private router : Router,
    
    ) {

     }

  especialidadForm=this.formBuilder.group({
    id:[''],
    codigo:[''],
    nombre:[''],
    costo:[''],
  });

  ngOnInit(): void {
    var params=(this.route.snapshot.params);
    this.id = params['id_cons'];


    this.especialidadesService.getEspecialidadId(this.id).subscribe(res=>{
      this.especialidad=res;

      this.especialidadForm.patchValue({
        id:this.especialidad.id,
        nombre:this.especialidad.nombre,
        codigo:this.especialidad.codigo,
        costo:this.especialidad.costo
      });
    },
    error=>{
      console.error(error);
     }
    );
  }


  pipe = new DatePipe('en-US');
  saveForm(){
    this.especialidadForm.value.id=this.especialidad.id;
    console.log(this.especialidadForm.value);
    this.especialidadesService.editEspecialidad(this.especialidadForm.value).subscribe(
      resp=>{
        this.toastrSvc.success(`Consulta agregada exitosamente`);
        this.router.navigate(['/administrator/cons/list'])
      },
      error=>{
        this.toastrSvc.error(`Hubo un error al editar la Consulta`);
        console.error(error);
      }
     );
  }


  deleteespecialidad(id:any){
    this.especialidadesService.deleteEspecialidad(id).subscribe(
      res=>{
        this.toastrSvc.success(`Se elimino la Consulta medica`);
        this.ngOnInit();
      },
      error=>{
        this.toastrSvc.error(`Hubo un error al Consulta al usuario`);
        console.error(error);
      }
    );
  }

  prueba(){
    console.log("hola");
  }

}
