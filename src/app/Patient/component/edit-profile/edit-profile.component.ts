import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }]
})
export class EditProfileComponent implements OnInit {

  usuario:any;
  formatYmd = (date: { toISOString: () => string | any[]; }) => date.toISOString().slice(0, 10);

  constructor(private location:Location,private userService: UsuarioService) { }

  ngOnInit(): void {
    var id = this.userService.getUserId();
    this.usuario = this.userService.getUserById(id).subscribe(
      (response) => {
        this.usuario = response;
        this.usuario.fecha_nacimiento = this.formatYmd(this.usuario.fecha_nacimiento)
      },
      (error) => {
      }
    );;
  }

  back(): void {
    this.location.back()
  }
}
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
};