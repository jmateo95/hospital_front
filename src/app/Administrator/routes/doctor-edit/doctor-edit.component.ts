import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../../services/doctores/doctor.service'
import { EspecialidadesService } from '../../../services/especialidades/especialidades.service'
import { EspecialidadDoctorService } from '../../../services/especialidad_doctor/especialidad-doctor.service'
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {
  id="";
  doctor:any;
  especialidades: any[] = []
  doctorespecialidad: any[] = []
  date1:any;
  horaInicio:any;
  horaFin:any;

  especialidad_doctor= this.formBuilder.group({
    id_doctor:[''],
    id_especialidad:[''],
  });

  constructor(
    private route:ActivatedRoute,
    private doctorService: DoctorService,
    private especialidadesService:EspecialidadesService,
    private especialidadDoctorService:EspecialidadDoctorService,
    private dateAdapter: DateAdapter<Date>,
    private formBuilder:FormBuilder, 
    private toastrSvc:ToastrService,
    private router : Router,
    
    ) {

      this.dateAdapter.setLocale('en-GB');

     }
  displayedColumns = ['position', 'name', 'editar'];

  email = new FormControl('', [Validators.required, Validators.email]);
  profileForm:FormGroup;

  


  ngOnInit(): void {
    var params=(this.route.snapshot.params);
    this.id = params['id'];

    this.especialidadesService.getAllEspecialidad().subscribe(res=>{
      this.especialidades = res["content"];
    },
    error=>{
      console.error(error);
     }
    );


    this.especialidadDoctorService.findDoctor(this.id).subscribe(res=>{
      this.doctorespecialidad=res;
    },
    error=>{
      console.error(error);
     }
    );




    this.doctorService.getDoctorId(this.id).subscribe(res=>{
      this.doctor=res;
      this.profileForm=this.formBuilder.group({
        id:[''],
        nombre:[''],
        colegiado:[''],
        dpi:[''],
        telefono:[''],
        email:this.email,
        horaInicio:[''],
        horaFin:[''],
        fecha:['']
      });

      this.profileForm.patchValue({
        id:this.doctor.id,
        nombre:this.doctor.nombre,
        colegiado:this.doctor.colegiado,
        dpi:this.doctor.dpi,
        telefono:this.doctor.telefono,
        email:this.doctor.email,
        horaInicio:this.doctor.horaInicio,
        horaFin:this.doctor.horaFin,
        fecha:this.doctor.fecha
      });
    },
    error=>{
      console.error(error);
     }
    );
  }


  pipe = new DatePipe('en-US');
  saveForm(){
    this.profileForm.value.id=this.doctor.id;
    this.profileForm.value.fecha=  this.pipe.transform(this.profileForm.value.fecha, 'yyyy-MM-dd');
    this.profileForm.value.horaInicio= this.profileForm.value.horaInicio;
    this.profileForm.value.horaFin= this.profileForm.value.horaFin;
    this.especialidades=this.profileForm.value.id;

    this.doctorService.editDoctor(this.profileForm.value).subscribe(
      resp=>{
        this.toastrSvc.success(`Medico editado exitosamente`);
        this.router.navigate(['/administrator/doctor/see'])
      },
      error=>{
        this.toastrSvc.error(`Hubo un error al editar al medico`);
        console.error(error);
      }
     );
  }


  deleteespecialidad(id:any){
    this.especialidadDoctorService.deleteEspecialidadDoctor(id).subscribe(
      res=>{
        this.toastrSvc.success(`Se elimino la especialidad medica`);
        this.ngOnInit();
      },
      error=>{
        this.toastrSvc.error(`Hubo un error al eliminar al eliminar la especialidad medica`);
        console.error(error);
      }
    );
  }

  saveEspecialidad(){
    this.especialidad_doctor.value.id_doctor=this.doctor.id;
    this.especialidadDoctorService.saveEspecialidadDoctor(this.especialidad_doctor.value).subscribe(
      resp=>{
        this.toastrSvc.success(`Se agrego la especialidad medica`);
        this.ngOnInit();

      },
      error=>{
        this.toastrSvc.error(`Hubo un error al añadir al usuario`);
        console.error(error);
      }
    );

  }


}
