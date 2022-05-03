import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { delay, tap } from 'rxjs/operators';
import { EspecialidadesService } from 'src/app/services/especialidades/especialidades.service';

@Component({
  selector: 'app-services-appointment',
  templateUrl: './services-appointment.component.html',
  styleUrls: ['./services-appointment.component.css']
})
export class ServicesAppointmentComponent implements OnInit {

  breakpoint = 3;
  hidepicture = false;
  filtroFecha!: FormGroup;
  tipoEspecialidad:any;
  especialidad_length: any;
  especialidadN="";
  costo="";
  constructor(
    private observer: BreakpointObserver, 
    private route:ActivatedRoute,
    private especialidad:EspecialidadesService
    ) { 
  
    
  }
  @ViewChild(MatPaginator)
  paginator: MatPaginator;


  ngOnInit() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.filtroFecha = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });

    this.especialidad.getEspecialidades(this.paginator?.pageIndex ?? 0).subscribe(resp => {
      this.tipoEspecialidad = resp.content;

    }
    );
    this.especialidad.countAll().subscribe(resp => {
      this.especialidad_length = resp;

    }
    );

    
  }

  filtrar(){
    this.especialidad.filter(this.especialidadN,this.costo,this.paginator?.pageIndex ?? 0).subscribe(resp => {
      this.tipoEspecialidad = resp.content;

    }
    );
    this.especialidad.count(this.especialidadN,this.costo).subscribe(resp => {
      this.especialidad_length = resp;

    }
    );
  }

  ngAfterViewInit() {
    this.paginator.page.
    pipe(
      tap(() => {
        this.filtrar()
      }
      ))
    .subscribe();
    this.observer
      .observe(['(min-width: 1200px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 3;
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
          
          this.hidepicture = true;
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
