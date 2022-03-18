import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute , Router, ParamMap} from '@angular/router';
import { TipoExamenService } from 'src/app/services/tipoExamenes/tipo-examenes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.css']
})
export class TestEditComponent implements OnInit {
  id_test: string;   
  constructor(
    private formBuilder:FormBuilder,
    private tipoExamenService: TipoExamenService,
    private toastrSvc: ToastrService,
    private route : ActivatedRoute, private router : Router
    ) { }
    
    profileForm = this.formBuilder.group({
      id:[''],
      codigo:[''],
      nombre:[''],
      descripcion:[''],
      costo:[''],
      orden:[''],
      formato:[''],
    });

  ngOnInit() {
    
    var params=(this.route.snapshot.params);    
    this.tipoExamenService.getTipoExamenId(params['id_test']).subscribe(      
      res=>{
        console.log(res);       
        this.Build(res);
      },
      error=>{
        console.log(error);
      }
    )          
    
    this.id_test = params['id_test'];
    console.log(this.id_test);
  }

  private Build(res:any){
    this.profileForm = this.formBuilder.group({ 
        id:res["id"],
        codigo:res["id"],
        nombre:res["nombre"],
        costo:res["costo"],        
        orden:JSON.stringify(res["orden"]),
        descripcion:res["descripcion"],
        formato:res["formatoInforma"]
    });
  }

  saveForm(){
    var tipoExamen = {
      "id": this.profileForm.value.id,
      "codigo": this.profileForm.value.codigo,
      "nombre": this.profileForm.value.nombre,
      "costo": this.profileForm.value.costo,
      "orden": this.profileForm.value.orden,
      "descripcion": this.profileForm.value.descripcion,
      "formatoInforma": this.profileForm.value.formato
    }

    this.tipoExamenService.updateTipoExamen(tipoExamen).subscribe(
      resp=>{
        this.toastrSvc.success('Examen creado con exito');
        this.router.navigate(['/administrator/test/list'])        
      },
      error=>{
        this.toastrSvc.error('Error al crear el examen');
        console.log(error)
      }
    )
  }  
}
