import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TipoExamenService } from 'src/app/services/tipoExamenes/tipo-examenes.service';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})
export class TestCreateComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private tipoExamenService:TipoExamenService,
    private toastrSvc: ToastrService,
    private router : Router
    ) { }

  profileForm = this.formBuilder.group({
    codigo:[''],
    nombre:[''],
    descripcion:[''],
    costo:[''],
    orden:[''],
    formato:[''],
  });

  ngOnInit(): void {
  }

  saveForm(){
    
    
    console.log('Form data is ', this.profileForm.value);
    var tipoExamen = {
      "codigo": this.profileForm.value.codigo,
      "nombre": this.profileForm.value.nombre,
      "costo": this.profileForm.value.costo,
      "orden": this.profileForm.value.orden,
      "descripcion": this.profileForm.value.descripcion,
      "formatoInforme": this.profileForm.value.formato
    }

    this.tipoExamenService.saveTipoExamen(tipoExamen).subscribe(
      resp=>{
        this.toastrSvc.success('Examen creado con exito'); 
        this.router.navigate(['/administrator/test/list'])     
      }
    )
  }

}
