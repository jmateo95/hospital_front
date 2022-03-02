import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-see-tests',
  templateUrl: './see-tests.component.html',
  styleUrls: ['./see-tests.component.css']
})
export class SeeTestsComponent implements OnInit {
  title = "";
  breakpoint = 3;
  hidepicture = false;
  image = "";
  filtroFecha!: FormGroup;
  navigationSubscription : any;
  cards = [
    { name: 'Tomografia', date: '12/08/2020', code:'1'},
    { name: 'Rayos X', date: '14/08/2020', code:'2' },
    { name: 'Ultrasonido', date: '15/12/2020',code:'3' },
    { name: 'Examen de la Glucosa', date: '12/05/2020', code:'4' }
  ];
 
  constructor(private observer: BreakpointObserver,private router: Router, private route: ActivatedRoute) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });

   }
   initialiseInvites() {
    var params = (this.route.snapshot.params);
    this.title = params['type'];
    if(this.title == 'history'){
      this.title = 'Examenes Realizados';
      this.image = "assets/img/Test2.png";
      
    }else if (this.title == 'upcoming'){
      this.title = 'Proximos Examenes';
      this.image = "assets/img/Test.png";
    }
  }

  ngOnInit() {
    
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    this.filtroFecha = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });
  }
  
  ngOnDestroy() {
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
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
