import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute , Router, ParamMap} from '@angular/router';
import { EspecialidadesService } from '../../../services/especialidades/especialidades.service';

@Component({
  selector: 'app-cons-create',
  templateUrl: './cons-create.component.html',
  styleUrls: ['./cons-create.component.css']
})
export class ConsCreateComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private especialidadesService: EspecialidadesService,
    private toastrSvc:ToastrService,
    private route : ActivatedRoute,
    private router : Router) { }

  profileForm = this.formBuilder.group({
    codigo:[''],
    nombre:[''],
    costo:[''],
  });

  ngOnInit(): void {
  }

  saveForm(){
  
    this.especialidadesService.saveEspecialidad(this.profileForm.value).subscribe(
      resp=>{
        this.toastrSvc.success(`Especialidad agregada exitosamente`);
        this.router.navigate(['/administrator/home']);
      },
      error=>{
        this.toastrSvc.error(`Hubo un error al añadir la Especialidad`);
        console.error(error);
      }
     );
  }

}
