import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DayWithMoreTestMadeComponent, ListaExamenes } from './dayWithMoreTestMade.component';
import { ExamenService } from 'src/app/services/examenes/examen.service';
import { of } from 'rxjs/internal/observable/of';

describe('DoctorCreateComponent', () => {
  let component: DayWithMoreTestMadeComponent;
  let fixture: ComponentFixture<DayWithMoreTestMadeComponent>;
  let examenService:ExamenService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
      ],
      declarations: [ DayWithMoreTestMadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayWithMoreTestMadeComponent);
    component = fixture.componentInstance;
    examenService=TestBed.get(ExamenService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it("NG", () => {
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    spyOn(examenService, 'getDaysWithMoreTest').and.returnValue(of(reponse));
    component.ngOnInit()
    fixture.detectChanges();
  });


  it('should return true from isAuthenticated when there is a token', () => { (1)
    let examen:any;
    expect(examen=new ListaExamenes('1',1)).toBeTruthy();
  });



});
