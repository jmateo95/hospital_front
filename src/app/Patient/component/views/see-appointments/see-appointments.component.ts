import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-see-appointments',
  templateUrl: './see-appointments.component.html',
  styleUrls: ['./see-appointments.component.css']
})
export class SeeAppointmentsComponent implements OnInit {
  breakpoint = 3;
  hidepicture = false;
  filtroFecha!: FormGroup;
  controlDoctors = new FormControl();
  optionsDoctors: string[] = ['Dr. Jose Perez', 'Dra. Maria Mendez', 'Dra. Luisa Gonzalez'];
  filteredOptionsDoctors!: Observable<string[]>;
  
  cards = [
    { title: 'Title 1', content: 'Content 1' },
    { title: 'Title 2', content: 'Content 2' },
    { title: 'Title 3', content: 'Content 3' },
    { title: 'Title 4', content: 'Content 4' }
  ];
  constructor(private observer: BreakpointObserver) { 
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.filtroFecha = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });
    this.filteredOptionsDoctors = this.controlDoctors.valueChanges.pipe(
      startWith(''),
      map(value => this._filter_doctors(value)),
    );
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

  private _filter_doctors(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.optionsDoctors.filter(optiond => optiond.toLowerCase().includes(filterValue));
  }
}
