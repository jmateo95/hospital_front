import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { LaboratoristaService } from 'src/app/services/laboratoristas/laboratorista.service';

@Component({
  selector: 'app-see-lab-admin',
  templateUrl: './see-lab-admin.component.html',
  styleUrls: ['./see-lab-admin.component.css']
})
export class SeeLabAdminComponent implements OnInit {

  breakpoint = 3;
  cards:any
  examenes:any
  constructor(private observer: BreakpointObserver,
    private laboratoristaService:LaboratoristaService
    ) { }

  ngOnInit() {
    this.laboratoristaService.getAllLaboratoristas().subscribe(
      res=>{
        this.cards = res["content"]                
       console.log(this.cards)
      },
      error=>{
        console.log(error)
      }
    )}
  

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
