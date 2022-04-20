import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { debounceTime, delay, finalize, map, startWith, switchMap, tap } from 'rxjs/operators';
import { EspecialidadesService } from 'src/app/services/especialidades/especialidades.service';
import { EspecialidadDoctorService } from 'src/app/services/especialidad_doctor/especialidad-doctor.service';
import { DoctorService } from '../../../../services/doctores/doctor.service'

@Component({
  selector: 'app-see-doctors',
  templateUrl: './see-doctors.component.html',
  styleUrls: ['./see-doctors.component.css']
})
export class SeeDoctorsComponent implements OnInit {
  breakpoint = 3;
  hidepicture = false;
  doctor_id = null;
  start_date = null;
  end_date = null;
  doctors:any;
  filtroFecha!: FormGroup;
  filteredDoctores: any;
  doctorFilter = new FormControl();
  doctors_length: number;
  speciality :any;
  filteredEspecialidades: any;
  especialidadFilter = new FormControl();

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(
    private observer: BreakpointObserver, 
    private doctorService: DoctorService,
    private especialidadService: EspecialidadesService,
    private doctorEspecialidadService: EspecialidadDoctorService) {
 

  }



  ngOnInit() {
    this.doctorService.getAllDoctorsP(this.paginator?.pageIndex ?? 0).subscribe(resp => {
      this.doctors = resp.content;

    },
      error => {
        console.error(error);
      }
    );
    this.doctorService.countDoctors().subscribe(resp => {
      this.doctors_length = resp;

    },
      error => {
        console.error(error);
      }
    );

    this.doctorFilter.valueChanges.pipe(
      debounceTime(50),
      tap(() => {
        this.filteredDoctores = [];
      }),
      switchMap(value =>
        this.doctorService.filterDoctor(value, this.doctor_id).pipe(
          finalize(() => {
          }),
        )))
      .subscribe(data => {
        if (data == undefined) {
          this.filteredDoctores = []
        } else {
          this.filteredDoctores = data;
        }
      }
      )
      this.especialidadFilter.valueChanges.pipe(
        debounceTime(50),
        tap(() => {
          this.filteredEspecialidades = [];
          
        }),
        switchMap(value =>
          this.especialidadService.filterEspecialidad(this.doctor_id,value).pipe(
            finalize(() => {
            }),
          )))
        .subscribe(data => {
          if (data == undefined) {
            this.filteredEspecialidades = []
  
          } else {
            data.forEach((element: any) => {
              if(element.nombre==undefined){
                element.nombre = element.especialidadNombre;
              }
              if(element.id==undefined){
                element.id = element.especialidadId;
              }
              });
            this.filteredEspecialidades = data;
          }
        }
        )
  }

  filtrar(){
    if(this.doctor_id!=null && this.speciality==null){
      this.doctorService.getDoctorId(this.doctor_id).subscribe(resp => {
        this.doctors = [];
        this.doctors.push(resp)
        this.doctors_length = 1;
  
      },
        error => {
          console.error(error);
        }
      );
    }else if(this.doctor_id==null && this.speciality!=null){
      this.doctorEspecialidadService.finddoctorsByEspecialidad(this.speciality,this.paginator?.pageIndex ?? 0).subscribe(resp => {
        this.doctors = resp.content;
        
        this.doctors.forEach((element: { doctorId: any; id: any; doctorNombre: any; nombre: any; }) => {
          if(element.doctorId){
            element.id = element.doctorId;
          }if (element.doctorNombre) {
            element.nombre = element.doctorNombre;
          }
        });
        console.log(this.doctors)
      },
        error => {
          console.error(error);
        }
      );
      this.doctorEspecialidadService.countDoctorByEspecialidad(this.speciality).subscribe(resp => {
        this.doctors_length = resp;
  
      },
        error => {
          console.error(error);
        }
      );

    }else{
      this.doctorService.getAllDoctorsP(this.paginator?.pageIndex ?? 0).subscribe(resp => {
        this.doctors = resp.content;
      },
        error => {
          console.error(error);
        }
      );
      this.doctorService.countDoctors().subscribe(resp => {
        this.doctors_length = resp;
  
      },
        error => {
          console.error(error);
        }
      );
    }
  }

  updateIdDoctor(id: any) {
    this.doctor_id = id;
  }

  updateIdEspecialidad(id: any) {
    this.speciality = id;
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(min-width: 1200px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 3;
          this.hidepicture = false;
        }
      });
    this.observer
      .observe(['(max-width: 1200px) and (min-width: 925px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 2;
          this.hidepicture = false;
        }
      });

    this.observer
      .observe(['(max-width: 925px) and (min-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 1;
          this.hidepicture = true;
        }
      });
    this.observer
      .observe(['(max-width: 800px) and (min-width: 625px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 2;

          this.hidepicture = true;
        }
      });
    this.observer
      .observe(['(max-width: 625px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 1;
          this.hidepicture = true;
        }
      });

  }


}
