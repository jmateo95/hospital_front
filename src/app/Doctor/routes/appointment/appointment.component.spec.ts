import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppointmentComponent, Examen, Laboratorista, Patients, Cita } from './appointment.component';
import { CitaExamenesService } from 'src/app/services/CitaExamenes/cita-examenes.service';
import { of } from 'rxjs/internal/observable/of';
import { LaboratoristaService } from 'src/app/services/laboratoristas/laboratorista.service';

describe('DoctorCreateComponent', () => {
  let component: AppointmentComponent;
  let fixture: ComponentFixture<AppointmentComponent>;
  let citaExamenesService: CitaExamenesService;
  let citaService: LaboratoristaService;

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
      declarations: [ AppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentComponent);
    component = fixture.componentInstance;
    citaExamenesService=TestBed.get(CitaExamenesService);
    citaService=TestBed.get(LaboratoristaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });




  it("NGO", () => {
    let reponse: any;
    reponse = {content: []}
    spyOn(citaService, 'getAllLaboratoristas').and.returnValue(of(reponse));
    component.ngOnInit()
    fixture.detectChanges();
  });


  it("filtrar Upcoming doctor", () => {
    let reponse: any;
    reponse = {content: []}
    spyOn(citaExamenesService, 'saveAppimentTest').and.returnValue(of(reponse));
    component.saveForm()
    fixture.detectChanges();
  });



  

  it('should return true from isAuthenticated when there is a token', () => { (1)
    let examen:any;
    expect(examen=new Examen(1,'1',1,true,'1','1','1')).toBeTruthy();
    let examen1:any;
    expect(examen1=new Laboratorista(1,'1',examen)).toBeTruthy();
  });

  it('should return true from isAuthenticated when there is a token', () => { (1)
    let examen:any;
    expect(examen=new Patients(1,'1','1')).toBeTruthy();

    let examen1:any;
    expect(examen1=new Cita(1, examen)).toBeTruthy();

  });



});
