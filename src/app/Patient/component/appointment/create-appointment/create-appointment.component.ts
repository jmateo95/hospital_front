import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { debounceTime, delay, finalize, switchMap, tap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { DoctorService } from 'src/app/services/doctores/doctor.service';
import { Cita } from 'src/app/services/cita/cita';
import { CitaService } from 'src/app/services/cita/cita.service';
import { ToastrService } from 'ngx-toastr';
import { EspecialidadesService } from 'src/app/services/especialidades/especialidades.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';



@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  hidepicture = false;
  doctorID :any;
  speciality :any;
  filteredEspecialidades: any;
  especialidadFilter = new FormControl();
  filteredDoctores: any;
  doctorFilter = new FormControl();
  errorMsg: string;
  isLoading = false;
  cita_save = new Cita();

  constructor(
    private user: UsuarioService,
    private location: Location,
    private observer: BreakpointObserver,
    private dateAdapter: DateAdapter<Date>,
    private route: ActivatedRoute,
    private especialidadService: EspecialidadesService,
    private doctorService: DoctorService,
    private citaService: CitaService,
    private toastrSvc:ToastrService,
    private router : Router,
    private userService: UsuarioService) {
    this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy

  }


  ngOnInit(): void {
    var params = (this.route.snapshot.params);
    this.speciality = params['speciality'];
    this.doctorID = params['doctor'];


    if(this.speciality!=null){
      if(this.speciality!=0){
        this.especialidadService.getEspecialidad(this.speciality).subscribe(
          (response) => {
           if (response!=null) {
             this.cita_save.especialidad.id = +this.speciality;
             this.cita_save.especialidad.nombre = response.nombre;
           }
          },
          (error) => {
            this.toastrSvc.error(error);
          }
        );
        if(this.doctorID!=null){
          if(this.doctorID!=0){
            this.doctorService.getDoctorId(this.doctorID).subscribe(
              (response) => {
               if(response!=null){
                this.cita_save.doctor.id = +this.doctorID;
                this.cita_save.doctor.nombre = response.nombre;
              
               }
                },
              (error) => {
                this.toastrSvc.error(error);
              }
            );
          }
          
        }
      }else{
          if(this.doctorID!=null){
            if(this.doctorID!=0){
              this.doctorService.getDoctorId(this.doctorID).subscribe(
                (response) => {
                 this.cita_save.doctor.id = +this.doctorID;
                 this.cita_save.doctor.nombre = response.nombre;
                },
                (error) => {
                  this.toastrSvc.error(error);
                }
              );
            }
            
          }
        
      }
    }
    this.especialidadFilter.valueChanges.pipe(
      debounceTime(50),
      tap(() => {
        this.filteredEspecialidades = [];
        this.errorMsg = "";
        this.isLoading = true;
        
      }),
      switchMap(value =>
        this.especialidadService.filterEspecialidad(this.cita_save.doctor.id,value).pipe(
          finalize(() => {
            this.isLoading = false;
          }),
        )))
      .subscribe(data => {
        if (data == undefined) {
          this.errorMsg = "Error";
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
          this.errorMsg = ""
          this.filteredEspecialidades = data;
        }
      }
      )
    this.doctorFilter.valueChanges.pipe(
      debounceTime(50),
      tap(() => {
        this.filteredDoctores = [];
        this.errorMsg = "";
        this.isLoading = true;
      }),
      switchMap(value =>
        this.doctorService.filterDoctor(value,this.cita_save.especialidad.id).pipe(
          finalize(() => {
            this.isLoading = false;
          }),
        )))
      .subscribe(data => {
        if (data == undefined) {
          this.errorMsg = "Error";
          this.filteredDoctores = []

        } else {
          data.forEach((element: any) => {
          if(element.nombre==undefined){
            element.nombre = element.doctorNombre;
          }
          if(element.id==undefined){
            element.id = element.doctorId;
          }
          });
          this.errorMsg = ""
          this.filteredDoctores = data;
        }
      }
    )
    


  }

  public onAddCita(): void {
    this.cita_save.paciente.id = this.userService.getUserId()+"" ;
    this.cita_save.hora = this.cita_save.hora+":00"
    this.citaService.addCita(this.cita_save).subscribe(
      (response) => {
        this.toastrSvc.success(`Registro Exitoso`);
        this.router.navigate(['/patient/services/upcoming/appointments'])
      },
      (error) => {
        this.toastrSvc.error(error);
      }
    );
  }


  updateIdDoctor(id: any) {
    this.cita_save.doctor.id = id;
    if(this.cita_save.especialidad.id==null){
      this.cita_save.especialidad.nombre=""
      this.filteredEspecialidades = []
    }
  }

  updateIdEspecialidad(id: any) {
    this.cita_save.especialidad.id = id;
    if(this.cita_save.doctor.id==null){
      this.cita_save.doctor.nombre=""
      this.filteredDoctores = []
    }
  }



  ngAfterViewInit() {
    this.observer
      .observe(['(min-width: 1200px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.hidepicture = false;
        }
      });
    this.observer
      .observe(['(max-width: 1200px) and (min-width: 925px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.hidepicture = false;
        }
      });

    this.observer
      .observe(['(max-width: 925px) and (min-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.hidepicture = false;
        }
      });
    this.observer
      .observe(['(max-width: 800px) and (min-width: 770px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {

          this.hidepicture = false;
        }
      });
    this.observer
      .observe(['(max-width: 770px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.hidepicture = true;
        }
      });

  }
  back(): void {
    this.location.back()
  }

  save(): void {
    console.log(this.cita_save);
  }

}
