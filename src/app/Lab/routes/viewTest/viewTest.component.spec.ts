import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Examen, Patients, ViewTestComponent } from './viewTest.component';
import { of } from 'rxjs/internal/observable/of';
import { ExamenService } from 'src/app/services/examenes/examen.service';

describe('DoctorCreateComponent', () => {
  let component: ViewTestComponent;
  let fixture: ComponentFixture<ViewTestComponent>;
  let examenService: ExamenService;

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
      declarations: [ ViewTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTestComponent);
    component = fixture.componentInstance;
    examenService=TestBed.get(ExamenService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("filtrar Upcoming doctor", () => {
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    spyOn(examenService, 'getTestToday').and.returnValue(of(reponse));
    component.ngOnInit()
    fixture.detectChanges();
  });

  it('should return true from isAuthenticated when there is a token', () => { (1)
    let examen:any;
    expect(examen=new Patients(1,'1','1')).toBeTruthy();
  });

  it('should return true from isAuthenticated when there is a token', () => { (1)
    let examen:any;
    expect(examen=new Examen(1,'1',1,true,'1','1','1')).toBeTruthy();
  });







});
