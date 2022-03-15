import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { PatientService } from '../Patient/Patient.service';
import { Patient } from '../Patient/Patient';
import { HttpErrorResponse } from '@angular/common/http';
import { DateAdapter, ErrorStateMatcher } from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  patient_add: Patient;

  constructor(private formBuilder: FormBuilder, private dateAdapter: DateAdapter<Date>, private patientService: PatientService) {
    this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
  }

  ngOnInit(): void {
  }



  email = new FormControl('', [Validators.required, Validators.email]);

  profileForm = this.formBuilder.group({
    sexo:[0],
    fecha_nacimiento: [0],
    telefono: ["string"],
    peso:[ 0],
    tipo_sangre: ["string"],
    usuario: this.formBuilder.group({
      nombre: ["string"],
      codigo: ["string"],
      email: ["string"],
      password: ["string"],
      rol: this.formBuilder.group({
        id: 4,
        nombre:[ "string"],
        descripcion: ["string"]
      })
    })
  });


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  public onAddPatient(): void {
    console.log(JSON.stringify(this.profileForm.value));
    let datos: Patient = this.profileForm.value;
    console.log(datos);
    this.patientService.addPatient(this.profileForm.value).subscribe(
      (response: Patient) => {
        console.log(response);
        this.profileForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.profileForm.reset();
      }
    );
  }

}
