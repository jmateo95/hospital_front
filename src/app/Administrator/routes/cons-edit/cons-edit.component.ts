import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cons-edit',
  templateUrl: './cons-edit.component.html',
  styleUrls: ['./cons-edit.component.css']
})
export class ConsEditComponent implements OnInit {
  id_cons: string;

  constructor(private formBuilder:FormBuilder, private route: ActivatedRoute) { }

  profileForm = this.formBuilder.group({
    codigo:[''],
    nombre:[''],
    costo:[''],
  });

  ngOnInit(): void {
    var params=(this.route.snapshot.params);
      this.id_cons = params['id_cons'];
      console.log(this.id_cons);
  }

  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }

}
