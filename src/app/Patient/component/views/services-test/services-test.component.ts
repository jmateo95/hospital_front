import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-services-test',
  templateUrl: './services-test.component.html',
  styleUrls: ['./services-test.component.css']
})
export class ServicesTestComponent implements OnInit {
 
  breakpoint = 3;
  hidepicture = false;
  filtroFecha!: FormGroup;
   
  cards = [
    { name: 'Tomografia', cost: 'Q. 300', orden:'Si' },
    { name: 'Rayos X', cost: 'Q.150', orden:'No' },
    { name: 'Ultrasonido', cost: 'Q.150', orden:'Si' },
    { name: 'Examen de la Glucosa', cost: 'Q.200', orden:'No' }
  ];
  constructor(private observer: BreakpointObserver, private route:ActivatedRoute) { 
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.filtroFecha = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });
    
  }



  ngOnInit() {
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
