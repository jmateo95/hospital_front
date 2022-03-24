import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router} from '@angular/router';
import { UsuarioService } from '../services/usuario/usuario.service';
import { ToastrService } from 'ngx-toastr';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder, 
    private usuarioService: UsuarioService,
    private toastrSvc:ToastrService,
    private router : Router
  ) { }



  email = new FormControl('', [Validators.required, Validators.email]);
 
  profileForm = this.formBuilder.group({
   email:this.email,
   password:['']
 });

  ngOnInit(): void {
    if(this.usuarioService.getRolId()){
      this.redirectsUser(Number(this.usuarioService.getRolId()));
    }
  }


  loginForm(){}


  redirectsUser(id_rol:Number){
    if (id_rol == 1) {
      this.router.navigate(['/administrator']);
    } else if (id_rol == 2) {
      this.router.navigate(['/doctor']);
    } else if (id_rol == 3) {
      this.router.navigate(['/lab'])
    } else if (id_rol == 4) {
      this.router.navigate(['/patient'])
    }

  }

}
