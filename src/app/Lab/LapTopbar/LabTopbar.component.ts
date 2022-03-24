import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './LabTopbar.component.html',
  styleUrls: ['./LabTopbar.component.css']
})
export class LabTopbarComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver,
    private usuarioService: UsuarioService,
    private toastrSvc:ToastrService,
    private router : Router) { }

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


  Logout(){
    this.usuarioService.logout();
    this.toastrSvc.success(`Adios`);
    this.router.navigate(['/login']);
  }

}