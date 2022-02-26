import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {
  id_doctor: string;

  constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>, private route: ActivatedRoute){
    this.dateAdapter.setLocale('en-GB');
  }
  
  
    ngOnInit() {
      var params=(this.route.snapshot.params);
      this.id_doctor = params['id_doctor'];
      console.log(this.id_doctor);
    }

   email = new FormControl('', [Validators.required, Validators.email]);
   
   profileForm = this.formBuilder.group({
     nombre:[''],
     colegiado:[''],
     dpi:[''],
     telefono:[''],
     correo:this.email,
     horai:[''],
     horaf:[''],
     fecha:['']
   });
  
   
    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
   
   saveForm(){
     console.log('Form data is ', this.profileForm.value);
   }
  
  }
  