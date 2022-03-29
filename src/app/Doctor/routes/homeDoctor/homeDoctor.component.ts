import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-homeDoctor',
  templateUrl: './homeDoctor.component.html',
  styleUrls: ['./homeDoctor.component.css']
})
export class HomeDoctorComponent implements OnInit {
  breakpoint = 4;
  hidepicture = false;
  nombreDoctor: any;
  constructor(private observer: BreakpointObserver,
    private userService: UsuarioService) { }

  ngOnInit(): void {
    this.userService.getUserById(this.userService.getUserId()).subscribe(
      res=>{
        this.nombreDoctor = res.nombre;
        console.log(this.nombreDoctor);
      }
    );
    
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(min-width: 1200px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 4;
          this.hidepicture = false;
        }
      });
    this.observer
      .observe(['(max-width: 1200px) and (min-width: 925px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 2;
          this.hidepicture = false;
        }
      });

    this.observer
      .observe(['(max-width: 925px) and (min-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 1;
          this.hidepicture = true;
        }
      });
    this.observer
      .observe(['(max-width: 800px) and (min-width: 625px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 2;
          this.hidepicture = false;
        }
      });
    this.observer
      .observe(['(max-width: 625px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 1;
          this.hidepicture = true;
        }
      });

  }

}
