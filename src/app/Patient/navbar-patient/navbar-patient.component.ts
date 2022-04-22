import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar-patient.component.html',
  styleUrls: ['./navbar-patient.component.css']
})
export class NavbarPatientComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  usuario: any;

  constructor(private observer: BreakpointObserver,
    private usuarioService: UsuarioService,
    private toastrSvc: ToastrService,
    private router: Router,
    private userService: UsuarioService) { }


  ngOnInit() {
    }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

  }

  Logout() {
    this.usuarioService.logout();
    this.toastrSvc.success(`Adios`);
    this.router.navigate(['/login']);
  }

}
