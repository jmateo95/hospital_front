import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute , Router, ParamMap} from '@angular/router';
import { EspecialidadesService } from '../../../services/especialidades/especialidades.service'

@Component({
  selector: 'app-espe-create',
  templateUrl: './espe-create.component.html',
  styleUrls: ['./espe-create.component.css']
})
export class EspeCreateComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private especialidadesService: EspecialidadesService,
    private toastrSvc:ToastrService,
    private route : ActivatedRoute, private router : Router
    ) { }

  especialidad = this.formBuilder.group({
    codigo:[''],
    nombre:[''],
    costo:[''],
  });

  ngOnInit(): void {
  }

  saveForm(){
    console.log(this.especialidad.value);
    this.especialidadesService.saveEspecialidad(this.especialidad.value).subscribe(
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
