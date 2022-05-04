import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { debounceTime, finalize, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Examen } from 'src/app/services/examenes/examen';
import { TipoExamenService } from 'src/app/services/tipoExamenes/tipo-examenes.service';
import { ExamenService } from 'src/app/services/examenes/examen.service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  type = "";
  filteredTipoExamen: any;
  tipoExamenFilter = new FormControl();
  errorMsg: string;
  isLoading = false;
  examen_save = new Examen();
  ordenpdf = true;
  ordenimg = true;
  orden = false;
  fecha_min = new Date();


  private apiServerUrl = environment.apiBaseUrl+"/Files/upload/ordenTest";

  constructor(
    private location: Location,
    private dateAdapter: DateAdapter<Date>,
    private route: ActivatedRoute,
    private tipoExamenService: TipoExamenService,
    private examenService: ExamenService,
    private toastrSvc: ToastrService,
    private router : Router,
    public userService: UsuarioService
  ) {
    this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
  }



  afuConfig = {
    formatsAllowed: '.pdf',
    uploadAPI: {
      url: this.apiServerUrl
    },
    theme: "dragNDrop",
    hideProgressBar: true,
    hideResetBtn: true,
    replaceTexts: {
      selectFileBtn: 'Selecciona el archivo',
      resetBtn: 'Reset',
      uploadBtn: 'Cargar',
      dragNDropBox: 'Arrastra y suelta el archivo',
      attachPinBtn: 'Adjunta el documento',
      afterUploadMsg_success: 'Archivo cargado exitosamente',
      afterUploadMsg_error: 'La carga del archivo fallo',
      sizeLimit: 'Tamaño limite'
    }
  };

  afuConfig2 = {
    formatsAllowed: '.jpg, .png',
    uploadAPI: {
      url: this.apiServerUrl
    },
    theme: "dragNDrop",
    hideProgressBar: true,
    hideResetBtn: true,
    replaceTexts: {
      selectFileBtn: 'Selecciona el archivo',
      resetBtn: 'Reset',
      uploadBtn: 'Cargar',
      dragNDropBox: 'Arrastra y suelta el archivo',
      attachPinBtn: 'Adjunta el documento',
      afterUploadMsg_success: 'Archivo cargado exitosamente',
      afterUploadMsg_error: 'La carga del archivo fallo',
      sizeLimit: 'Tamaño limite'
    }
  };


  ngOnInit(): void {
    var params = (this.route.snapshot.params);
    this.type = params['type'];
    this.tipoExamenFilter.valueChanges.pipe(
      debounceTime(50),
      tap(() => {
        this.filteredTipoExamen = [];
        this.errorMsg = "";
        this.isLoading = true;
      }),
      switchMap(value =>
        this.tipoExamenService.filterTipoExamen(value).pipe(
          finalize(() => {
            this.isLoading = false;
          }),
        )))
      .subscribe(data => {
        if (data == undefined) {
          console.log("error");
          this.errorMsg = "Error";
          this.filteredTipoExamen = []

        } else {
          console.log(data);
          this.errorMsg = ""
          this.filteredTipoExamen = data;
        }
      }
      )

  }

  public onAddExamen(): void {
    this.examen_save.paciente.id = this.userService.getUserId()+"";
    this.examen_save.hora = this.examen_save.hora+":00"
    console.log(this.examen_save.ordenDoc)

    if((this.orden && this.examen_save.ordenDoc!=null)||(!this.orden && this.examen_save.ordenDoc==null)){
      this.examenService.addExamen(this.examen_save).subscribe(
        (response) => {
          this.toastrSvc.success(`Registro Exitoso`);
          this.router.navigate(['/patient/services/upcoming/tests'])
        }
      );
    }else{
      this.toastrSvc.error("Falta orden para realizar el examen");
    }

    
  }

  docUpload(e:any){
    console.log(e);
    this.examen_save.ordenDoc = ""+e.body.message;
    console.log( this.examen_save.ordenDoc)
  }
  
  updateIdTipo(id: number, orden: boolean, formato:String) {
    this.examen_save.tipo.id = id;
    this.orden = orden;
    if(orden){
      if(formato=='PDF'){
        this.ordenpdf = !orden;
        this.ordenimg = orden;
       }else{
         this.ordenpdf = orden;
         this.ordenimg = !orden;
        }
    }   
    else{
      this.ordenimg = true;
      this.ordenpdf = true;
    }
  }

  back(): void {
    this.location.back()
  }

}
