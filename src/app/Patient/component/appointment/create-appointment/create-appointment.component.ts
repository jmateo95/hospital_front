import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { debounceTime, delay, finalize, switchMap, tap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { EspecialidadService } from 'src/app/services/especialidades/especialidad.service';
import { Especialidad } from 'src/app/services/especialidades/especialidad';
import { DoctorService } from 'src/app/services/doctores/doctor.service';
import { Cita } from 'src/app/services/cita/cita';
import { CitaService } from 'src/app/services/cita/cita.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  hidepicture = false;
  doctor_name = "";
  speciality = "";
  time = { hour: 13, minute: 30 };
  filteredEspecialidades: any;
  especialidadFilter = new FormControl();
  filteredDoctores: any;
  doctorFilter = new FormControl();
  errorMsg: string;
  isLoading = false;
  cita_save = new Cita();
  constructor(
    private location: Location,
    private observer: BreakpointObserver,
    private dateAdapter: DateAdapter<Date>,
    private route: ActivatedRoute,
    private especialidadService: EspecialidadService,
    private doctorService: DoctorService,
    private citaService: CitaService,
    private toastrSvc:ToastrService,
    private router : Router) {
    this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy

  }


  ngOnInit(): void {
    var params = (this.route.snapshot.params);
    this.speciality = params['speciality'];
    this.doctor_name = params['doctor'];
    this.especialidadFilter.valueChanges.pipe(
      debounceTime(50),
      tap(() => {
        this.filteredEspecialidades = [];
        this.errorMsg = "";
        this.isLoading = true;
      }),
      switchMap(value =>
        this.especialidadService.filterEspecialidad(value).pipe(
          finalize(() => {
            this.isLoading = false;
          }),
        )))
      .subscribe(data => {
        if (data == undefined) {
          console.log("error");
          this.errorMsg = "Error";
          this.filteredEspecialidades = []

        } else {
          console.log(data);
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
        this.doctorService.filterDoctor(value).pipe(
          finalize(() => {
            this.isLoading = false;
          }),
        )))
      .subscribe(data => {
        if (data == undefined) {
          this.errorMsg = "Error";
          this.filteredDoctores = []

        } else {
          console.log(data);
          this.errorMsg = ""
          this.filteredDoctores = data;
        }
      }
    )


  }

  public onAddPatient(): void {
    this.citaService.addCita(this.cita_save).subscribe(
      (response) => {
        this.toastrSvc.success(`Registro Exitoso`);
        this.router.navigate(['/patient/home'])
      },
      (error) => {
        this.toastrSvc.error(error);
      }
    );
  }


  updateIdDoctor(id: number) {
    this.cita_save.doctor.id = id;
  }

  updateIdEspecialidad(id: number) {
    this.cita_save.especialidad.id = id;
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
