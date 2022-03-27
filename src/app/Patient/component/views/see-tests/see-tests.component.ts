import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';
import { ExamenService } from 'src/app/services/examenes/examen.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

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
  tests : any;
 
  constructor(
    private observer: BreakpointObserver,
    private router: Router, 
    private route: ActivatedRoute,
    private testService: ExamenService,
    private usuarioService: UsuarioService
    ) {
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
      this.testService.getRecordTest(this.usuarioService.getUserId()).subscribe(resp => {
        this.tests = resp;
      },
        error => {
          console.error(error);
        }
      );
      
    }else if (this.title == 'upcoming'){
      this.title = 'Proximos Examenes';
      this.image = "assets/img/Test.png";
      this.testService.getUpcomingTest(this.usuarioService.getUserId()).subscribe(resp => {
        this.tests = resp;
      },
        error => {
          console.error(error);
        }
      );
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
