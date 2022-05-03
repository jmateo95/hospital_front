import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctores/doctor.service';
import { EspecialidadDoctorService } from 'src/app/services/especialidad_doctor/especialidad-doctor.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  id = "";
  doctorespecialidad: any[]

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private doctorService: DoctorService,
    private especialidadDoctorService: EspecialidadDoctorService
  ) { }
  displayedColumns = ['position', 'name'];
  doctor: any;

  ngOnInit(): void {
    var params = (this.route.snapshot.params);
    this.id = params['id'];
    this.getDoctor(this.id);
    this.getEspecialidad(this.id);


  }

  getDoctor(id: any) {
    this.doctorService.getDoctorId(id).subscribe(resp => {
      this.doctor = resp;
    }
    );
  }
  getEspecialidad(id: any) {
    this.especialidadDoctorService.findDoctor(id).subscribe(res => {
      this.doctorespecialidad = res;
      var i = 1;
      this.doctorespecialidad.forEach(element => {
        element.position = i;
        i++;
      });
    }
    );
  }

  back(): void {
    this.location.back()
  }


}


