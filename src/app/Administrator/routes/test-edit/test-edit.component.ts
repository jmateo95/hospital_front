import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.css']
})
export class TestEditComponent implements OnInit {
  id_test: string;
  constructor(private formBuilder:FormBuilder, private route: ActivatedRoute) { }

  profileForm = this.formBuilder.group({
    codigo:[''],
    nombre:[''],
    descripcion:[''],
    costo:[''],
    orden:[''],
    formato:[''],

  });

  ngOnInit() {
    var params=(this.route.snapshot.params);
    this.id_test = params['id_test'];
    console.log(this.id_test);
  }

  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }

}
