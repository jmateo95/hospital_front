import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute , Router, ParamMap} from '@angular/router';
import { LaboratoristaService } from 'src/app/services/laboratoristas/laboratorista.service';
import { TipoExamenService } from 'src/app/services/tipoExamenes/tipo-examenes.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-lab-edit',
  templateUrl: './lab-edit.component.html',
  styleUrls: ['./lab-edit.component.css']
})
export class LabEditComponent implements OnInit {
  id_lab: string;
  examenes: Examen[] = []
  pass:any

  constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>,
    private laboratoristaService: LaboratoristaService,
    private tipoExamenService: TipoExamenService,
    private toastrSvc: ToastrService,
    private route : ActivatedRoute, private router : Router
    ){
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }
  ngOnInit(): void {
    var params=(this.route.snapshot.params);
    this.tipoExamenService.getAllTiposExamen().subscribe(
      res=>{        
        this.examenes = res["content"];                  
      },
      error=>{
        console.log(error);
      }
    )
   
    this.laboratoristaService.getLaboratoristaId(params['id_lab']).subscribe(
      res=>{
        console.log(res);
        this.build(res);
      },
      error=>{
        console.log(error);
      }
    )

      this.id_lab = params['id_lab'];
      console.log(this.id_lab);
  }
   email = new FormControl('', [Validators.required, Validators.email]);   
   
   profileForm = this.formBuilder.group({
    examen:[''],
    codigo:[''], 
    nombre:[''],
    registro:[''],
    dpi:[''],
    telefono:[''],
    correo:this.email,
    password:[''],
    fecha:[''],
    dia1:[''],
    dia2:[''],
    dia3:[''],
    dia4:[''],
    dia5:[''],
   });
     
   private build(res:any){
     this.pass = res.password;
     this.id_lab = res.id;
     this.profileForm = this.formBuilder.group({       
      codigo:res.codigo, 
      nombre:res.nombre,
      registro:res.registro,
      dpi:res.dpi,
      telefono:res.telefono,
      correo:res.email,
      fecha:Date.now(),
      examen:this.examenes.filter(element => element.id == res.tipoExamen.id)      
     })          
   }
  
    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }  
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    pipe = new DatePipe('en-US');

   saveForm(){    
     var fecha = parseInt(""+this.pipe.transform(this.profileForm.value.fecha, 'yyyyMMdd'),10);
     var laboratorista = {
       "id": this.id_lab,
        "nombre": this.profileForm.value.nombre,
        "codigo": this.profileForm.value.codigo,
        "email": this.profileForm.value.correo,
        "password": this.pass,
        "dpi": this.profileForm.value.dpi,
        "registro": this.profileForm.value.registro,
        "fecha_inicio": fecha,
        "telefono": this.profileForm.value.telefono, 
        "tipoExamen": this.profileForm.value.examen       
     }
     console.log(laboratorista);    
     this.laboratoristaService.updateLaboratorista(laboratorista).subscribe(
      res=>{
       this.toastrSvc.success(`Medico agregado exitosamente`);
       this.router.navigate(['/administrator/lab/see']);
      },
      error=>{
       this.toastrSvc.error(`Hubo un error al añadir al medico`);
       console.error(error);
      }
    )   
   }
  
  }
  
  export class Examen{
    constructor(public id: number, public codigo: string, public costo: number, public orden: boolean, public description: string, public formatoInforma: string, public nombre:string){}
  }