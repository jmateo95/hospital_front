import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-cons-create',
  templateUrl: './cons-create.component.html',
  styleUrls: ['./cons-create.component.css']
})
export class ConsCreateComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  profileForm = this.formBuilder.group({
    codigo:[''],
    nombre:[''],
    costo:[''],
  });

  ngOnInit(): void {
  }

  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }

}
