import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { PatientService } from '../services/pacientes/Patient.service';
import { Patient } from '../services/pacientes/Patient';
import { HttpErrorResponse } from '@angular/common/http';
import { DateAdapter, ErrorStateMatcher } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';


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

  patient_add = new Patient();
  constructor(
    private formBuilder: FormBuilder, 
    private dateAdapter: DateAdapter<Date>, 
    private patientService: PatientService,
    private toastrSvc:ToastrService,
    private route : ActivatedRoute, 
    private router : Router
    ) {
    this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
  }

  ngOnInit(): void {
  }



  email = new FormControl('', [Validators.required, Validators.email]);




  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  public onAddPatient(): void {
    this.patientService.addPatient(this.patient_add).subscribe(
      (response) => {
        this.toastrSvc.success(`Registro Exitoso`);
        this.router.navigate(['/patient/home'])
      },
      (error) => {
        this.toastrSvc.error(error);
      }
    );
  }

}
