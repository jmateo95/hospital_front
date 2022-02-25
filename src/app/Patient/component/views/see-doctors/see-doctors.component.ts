import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-see-doctors',
  templateUrl: './see-doctors.component.html',
  styleUrls: ['./see-doctors.component.css']
})
export class SeeDoctorsComponent implements OnInit {
  breakpoint = 3;
  cards = [
    { title: 'Title 1', content: 'Content 1' },
    { title: 'Title 2', content: 'Content 2' },
    { title: 'Title 3', content: 'Content 3' },
    { title: 'Title 4', content: 'Content 4' }
  ];
  constructor(private observer: BreakpointObserver) { }



  ngOnInit() {
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(min-width: 1200px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 3;
        }
      });
    this.observer
      .observe(['(max-width: 1200px) and (min-width: 925px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 2;
        }
      });

    this.observer
      .observe(['(max-width: 925px) and (min-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 1;
        }
      });
    this.observer
      .observe(['(max-width: 800px) and (min-width: 625px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 2;
        }
      });
    this.observer
      .observe(['(max-width: 625px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.breakpoint = 1;
        }
      });

  }
}
