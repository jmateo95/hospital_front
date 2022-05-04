import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeeDoctorsComponent } from './see-doctors.component';
import { EspecialidadDoctorService } from 'src/app/services/especialidad_doctor/especialidad-doctor.service';
import { DoctorService } from 'src/app/services/doctores/doctor.service';
import { of } from 'rxjs/internal/observable/of';
import { Doctor } from 'src/app/services/doctores/doctor';

describe('SeeDoctorsComponent', () => {
  let component: SeeDoctorsComponent;
  let fixture: ComponentFixture<SeeDoctorsComponent>;
  let doctorEspecialidadService: EspecialidadDoctorService;
  let doctorService: DoctorService;

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
      declarations: [SeeDoctorsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeDoctorsComponent);
    component = fixture.componentInstance;
    doctorEspecialidadService = TestBed.get(EspecialidadDoctorService)
    doctorService = TestBed.get(DoctorService)
    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
  it("updateDoctor ", () => {
    let id = 1;
    component.updateIdDoctor(id);
    fixture.detectChanges();
    expect(component.doctor_id).not.toBeNull();
  });
  it("UpdateEspecialidad ", () => {
    let id = 1;
    component.updateIdEspecialidad(id);
    fixture.detectChanges();
    expect(component.speciality).not.toBeNull();
  });

  it("filtrar  doctor", () => {
    component.doctor_id = 1;
    component.speciality = null;
    let reponse = new Doctor();
    spyOn(doctorService, 'getDoctorId').and.returnValue(of(reponse));
    component.filtrar()
    fixture.detectChanges();
    expect(component.doctors_length).toEqual(1)

  });

  it("filtrar especialidad", () => {
    component.doctor_id = null;
    component.speciality = 1; let reponse: any;
    reponse = {
      content: [
        {
          doctorId: 1,
          id:1,
          doctorNombre: "prueba",
          nombre: "prueba"
        }
      ]
    }
    let response2 = 1;
    spyOn(doctorEspecialidadService, 'finddoctorsByEspecialidad').and.returnValue(of(reponse));
    spyOn(doctorEspecialidadService, 'countDoctorByEspecialidad').and.returnValue(of(response2));
    
    component.filtrar()
    fixture.detectChanges();
    expect(component.doctors_length).toEqual(1);

  });

  it("filtrar ", () => {
    component.doctor_id = null;
    component.speciality = null; 
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    let response2 = 1;
    spyOn(doctorService, 'getAllDoctorsP').and.returnValue(of(reponse));
    spyOn(doctorService, 'countDoctors').and.returnValue(of(response2));
    
    component.filtrar()
    fixture.detectChanges();
    expect(component.doctors_length).toEqual(1);

  });

  it("ngOnInit ", () => {
    let reponse: any;
    reponse = {
      content: [
        
      ]
    }
    let response2 = 1;
    spyOn(doctorService, 'getAllDoctorsP').and.returnValue(of(reponse));
    spyOn(doctorService, 'countDoctors').and.returnValue(of(response2));
    
    component.ngOnInit()
    fixture.detectChanges();
    expect(component.doctors_length).toEqual(1);

  });
});
