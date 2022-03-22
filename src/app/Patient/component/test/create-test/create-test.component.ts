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

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private dateAdapter: DateAdapter<Date>,
    private route: ActivatedRoute,
    private tipoExamenService: TipoExamenService,
    private examenService: ExamenService,
    private toastrSvc: ToastrService,
    private router : Router
  ) {
    this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
  }



  afuConfig = {
    formatsAllowed: '.pdf',
    uploadAPI: {
      url: "https://localhost"
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
    formatsAllowed: '.jpa, .png',
    uploadAPI: {
      url: "https://localhost"
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

  public onAddCita(): void {
    this.examen_save.paciente.id = 1
    this.examen_save.hora = this.examen_save.hora+":00"
    this.examenService.addExamen(this.examen_save).subscribe(
      (response) => {
        this.toastrSvc.success(`Registro Exitoso`);
      },
      (error) => {
        this.toastrSvc.error(error);
      }
    );
  }
  
  updateIdTipo(id: number, orden: boolean, formato:String) {
    this.examen_save.tipoExamen.id = id;
    if(formato=='PDF'){
     this.ordenpdf = !orden;
     this.ordenimg = orden;
    }else if(formato=='PDF'){
      this.ordenimg = !orden;
      this.ordenpdf = orden;
    }else{
      this.ordenimg = true;
      this.ordenpdf = true;
    }
  }

  back(): void {
    this.location.back()
  }

}
