import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';
import { TipoExamenService } from 'src/app/services/tipoExamenes/tipo-examenes.service';
@Component({
  selector: 'app-services-test',
  templateUrl: './services-test.component.html',
  styleUrls: ['./services-test.component.css']
})
export class ServicesTestComponent implements OnInit {
 
  breakpoint = 3;
  hidepicture = false;
  filtroFecha!: FormGroup;
  tipoExamenes:any;
  test_length: any;
  testN="";
  costo="";
  constructor(
    private observer: BreakpointObserver, 
    private route:ActivatedRoute,
    private tipoExamenesService:TipoExamenService) { 
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.filtroFecha = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });
    
  }

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  ngOnInit() {

    this.tipoExamenesService.getTiposExamen(this.paginator?.pageIndex ?? 0).subscribe(resp => {
      this.tipoExamenes = resp.content;
      this.tipoExamenes.forEach((element: { orden: any; orden_:any }) => {
        if(element.orden){
          element.orden_ = "Si";
        }else{
          element.orden_ = "No";
        }
      });

    }
    );
    this.tipoExamenesService.countAll().subscribe(resp => {
      this.test_length = resp;
    }
    );

  }

  filtrar(){
    this.tipoExamenesService.filter(this.testN,this.costo,this.paginator?.pageIndex ?? 0).subscribe(resp => {
      this.tipoExamenes = resp.content;
      this.tipoExamenes.forEach((element: { orden: any; orden_:any }) => {
        if(element.orden){
          element.orden_ = "Si";
        }else{
          element.orden_ = "No";
        }
      });

    }
    );
    this.tipoExamenesService.count(this.testN,this.costo).subscribe(resp => {
      this.test_length = resp;

    }
    );
  }

  ngAfterViewInit() {
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
