import { Component, Input, OnInit } from '@angular/core';
import { EspecialidadDoctorService } from 'src/app/services/especialidad_doctor/especialidad-doctor.service';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent implements OnInit {

  @Input() admin: boolean = false;
  @Input() pacient: boolean  = false;
  @Input() doctor: any;
  @Input() id:string='';
  especialidades: any[];


  constructor(
    private especialidadService: EspecialidadDoctorService
  ) { }

  ngOnInit(): void {
    this.especialidadService.findDoctor(this.id).
    subscribe(
      response => {
        this.especialidades = response
      }
    )
  }

}
