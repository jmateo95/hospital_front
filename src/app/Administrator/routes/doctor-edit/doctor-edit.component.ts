import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../../services/doctores/doctor.service'
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
  date1:any;
  horaInicio:any;
  horaFin:any;

  constructor(
    private route:ActivatedRoute,
    private doctorService: DoctorService,
    private dateAdapter: DateAdapter<Date>,
    private formBuilder:FormBuilder, 
    private toastrSvc:ToastrService,
    private router : Router,
    
    ) {

      this.dateAdapter.setLocale('en-GB');

     }
  displayedColumns = ['position', 'name', 'editar'];
  dataSource = ELEMENT_DATA;

  email = new FormControl('', [Validators.required, Validators.email]);
  profileForm:FormGroup;


  convertDate(fecha:number):String{
    var newfecha=String(fecha+1);
    newfecha=newfecha.substring(0,4)+"-"+newfecha.substring(4,6)+"-"+newfecha.substring(6,8);
    return newfecha;
  }

  convertHour(hora:number):String{
    var newhour=String(hora);
    if(hora<1000)
      newhour="0"+newhour.substring(0,1)+":"+newhour.substring(1,3);
    else
      newhour=newhour.substring(0,2)+":"+newhour.substring(2,4);
    return newhour;
  }


  ngOnInit(): void {
    var params=(this.route.snapshot.params);
    this.id = params['id'];
    this.doctorService.getDoctorId(this.id).subscribe(resp=>{
      this.doctor=resp;
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
        horaInicio:this.convertHour(this.doctor.horaInicio),
        horaFin:this.convertHour(this.doctor.horaFin),
        fecha:this.convertDate(this.doctor.fecha)
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
    this.profileForm.value.fecha= parseInt(""+this.pipe.transform(this.profileForm.value.fecha, 'yyyyMMdd'),10);
    this.profileForm.value.horaInicio= parseInt((""+this.profileForm.value.horaInicio).replace(":",""),10);
    this.profileForm.value.horaFin= parseInt((""+this.profileForm.value.horaFin).replace(":",""),10);
    

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

}


export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Pediatria' },
  {position: 2, name: 'Cirugia' },
  {position: 3, name: 'Cardiologia'}
];