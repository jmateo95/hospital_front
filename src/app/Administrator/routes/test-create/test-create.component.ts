import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})
export class TestCreateComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  profileForm = this.formBuilder.group({
    codigo:[''],
    nombre:[''],
    descripcion:[''],
    costo:[''],
    orden:[''],
    formato:[''],

  });

  ngOnInit(): void {
  }

  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }

}
