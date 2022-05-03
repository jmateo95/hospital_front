import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SeeAppointmentsComponent } from './see-appointments.component';
import { CitaService } from 'src/app/services/cita/cita.service';
import { of } from 'rxjs/internal/observable/of';

describe('SeeAppointmentsComponent', () => {
  let component: SeeAppointmentsComponent;
  let fixture: ComponentFixture<SeeAppointmentsComponent>;
  let citaService: CitaService;

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
      declarations: [SeeAppointmentsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeAppointmentsComponent);
    component = fixture.componentInstance;
    citaService = TestBed.get(CitaService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("UpdateIdTipo ", () => {
    let id = 1;
    component.updateIdDoctor(id);
    fixture.detectChanges();
    expect(component.doctor_id).not.toBeNull();
  });
  it("filtrar todo Upcoming", () => {
    component.start_date = null;
    component.end_date = null;
    component.doctor_id = null;
    component.upcoming = true;
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    let response2 = 1;
    spyOn(citaService, 'getUpcomingCitas').and.returnValue(of(reponse));    
    spyOn(citaService, 'countUpcomingCitas').and.returnValue(of(response2));
    component.filtrar()
    fixture.detectChanges();
  });

  it("filtrar todo Record", () => {
    component.start_date = null;
    component.end_date = null;
    component.doctor_id = null;
    component.upcoming = false;
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    let response2 = 1;
    spyOn(citaService, 'getRecordCitas').and.returnValue(of(reponse));
    spyOn(citaService, 'countRecordCitas').and.returnValue(of(response2));
    component.filtrar()
    fixture.detectChanges();
  });

  it("filtrar Record doctor", () => {
    component.start_date = null;
    component.end_date = null;
    component.doctor_id = 1;
    component.upcoming = false;
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    let response2 = 1;
    spyOn(citaService, 'filterCitasDoctorRecord').and.returnValue(of(reponse));
    spyOn(citaService, 'countfilterCitasDoctorRecord').and.returnValue(of(response2));
    component.filtrar()
    fixture.detectChanges();
  });

  it("filtrar Upcoming doctor", () => {
    component.start_date = null;
    component.end_date = null;
    component.doctor_id = 1;
    component.upcoming = true;
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    let response2 = 1;
    spyOn(citaService, 'filterCitasDoctorUpcoming').and.returnValue(of(reponse));
    spyOn(citaService, 'countfilterCitasDoctorUpcoming').and.returnValue(of(response2));
    component.filtrar()
    fixture.detectChanges();
  });

  it("filtrar  fechas", () => {
    component.start_date = new Date();
    component.end_date = new Date();
    component.doctor_id = null;
    component.upcoming = true;
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    let response2 = 1;
    spyOn(citaService, 'filterCitasDate').and.returnValue(of(reponse));
    spyOn(citaService, 'countfilterCitasDate').and.returnValue(of(response2));
    component.filtrar()
    fixture.detectChanges();
  });

  it("filtrar fechas, doctor", () => {
    component.start_date = new Date();
    component.end_date = new Date();
    component.doctor_id = 1;
    component.upcoming = true;
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    let response2 = 1;
    spyOn(citaService, 'filterCitasDateDoctor').and.returnValue(of(reponse));
    spyOn(citaService, 'countfilterCitasDateDoctor').and.returnValue(of(response2));
    component.filtrar()
    fixture.detectChanges();
    expect(component.appointments_lenght).toEqual(1);
  });



});
