import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { CitaService } from 'src/app/services/cita/cita.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-viewAppointment',
  templateUrl: './viewAppintments.component.html',
  styleUrls: ['./viewAppintments.component.css']
})

export class ViewAppointmentComponent implements OnInit {
  hide = true;
  columnas: string[] = ['hora', 'nombre'];
  citas: Cita[] = [];
  dataSource: any;

  constructor(private formBuilder: FormBuilder, private dateAdapter: DateAdapter<Date>,
    private citaService: CitaService,
    private usuarioService: UsuarioService) {
    this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
  }

  getId() {
    return Number(this.usuarioService.getUserId());
  }

  ngOnInit(): void {
    var id_doctor = this.getId();

    this.citaService.getTodayDoctorAppoiment(id_doctor).subscribe(
      res => {
        this.citas = res;
        this.dataSource = new MatTableDataSource<Cita>(this.citas);
      }
    )
  }
}

export class Patients {
  constructor(public id: number, public codigo: string, public nombre: string) { }
}

export class Cita {
  constructor(public id: number, public paciente: Patients, public hora: Time) { }
}