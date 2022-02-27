import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-see-tests',
  templateUrl: './see-tests.component.html',
  styleUrls: ['./see-tests.component.css']
})
export class SeeTestsComponent implements OnInit {

  breakpoint = 3;
  cards = [
    { title: 'Title 1', content: 'Content 1' },
    { title: 'Title 2', content: 'Content 2' },
    { title: 'Title 3', content: 'Content 3' },
    { title: 'Title 4', content: 'Content 4' }
  ];
  hidepicture = false;
  filtroFecha!: FormGroup;
  controlTipoExamen = new FormControl();
  optionsTipoExamen: string[] = ['Rayos X', 'Ultrasonido', 'Examen de Sangre'];
  filteredOptionsTipoExamen!: Observable<string[]>;
  constructor(private observer: BreakpointObserver) { }



  ngOnInit() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.filtroFecha = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });
    this.filteredOptionsTipoExamen = this.controlTipoExamen.valueChanges.pipe(
      startWith(''),
      map(value => this._filter_doctors(value)),
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
  private _filter_doctors(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.optionsTipoExamen.filter(optiond => optiond.toLowerCase().includes(filterValue));
  }

}
