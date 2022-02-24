import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-espe-create',
  templateUrl: './espe-create.component.html',
  styleUrls: ['./espe-create.component.css']
})
export class EspeCreateComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  profileForm = this.formBuilder.group({
    codigo:[''],
    nombre:[''],
  });

  ngOnInit(): void {
  }

  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }

}
