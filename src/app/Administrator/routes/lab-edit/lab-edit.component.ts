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
  selector: 'app-lab-edit',
  templateUrl: './lab-edit.component.html',
  styleUrls: ['./lab-edit.component.css']
})
export class LabEditComponent implements OnInit {
  id_lab: string;

  constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>, private route: ActivatedRoute){
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }
  ngOnInit(): void {
    var params=(this.route.snapshot.params);
      this.id_lab = params['id_lab'];
      console.log(this.id_lab);
  }
   email = new FormControl('', [Validators.required, Validators.email]);
   
   profileForm = this.formBuilder.group({
     codigo:[''],
     nombre:[''],
     registro:[''],
     dpi:[''],
     telefono:[''],
     correo:this.email,
     fecha:[''],
     dia1:[''],
     dia2:[''],
     dia3:[''],
     dia4:[''],
     dia5:[''],
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
  
