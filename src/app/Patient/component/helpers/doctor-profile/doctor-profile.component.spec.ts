import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DoctorProfileComponent } from './doctor-profile.component';
import { SpyLocation } from '@angular/common/testing';
import { EspecialidadDoctorService } from 'src/app/services/especialidad_doctor/especialidad-doctor.service';
import { DoctorService } from 'src/app/services/doctores/doctor.service';
import { of } from 'rxjs/internal/observable/of';

describe('DoctorProfileComponent', () => {
  let component: DoctorProfileComponent;
  let fixture: ComponentFixture<DoctorProfileComponent>;  
  let location: SpyLocation; 
  let especialidadService: EspecialidadDoctorService;
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
      declarations: [ DoctorProfileComponent ],      
      providers: [
        { provide: Location, useClass: SpyLocation }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorProfileComponent);
    component = fixture.componentInstance;    
    especialidadService = TestBed.get(EspecialidadDoctorService);
    doctorService = TestBed.get(DoctorService);
    location = TestBed.get(Location);
    component.doctor = {
      nombre: 'Juan'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('return back', ()=>{
    spyOn(location, 'back').and.callFake(() => console.log("Test"));
    component.back();
    expect(component.back).toBeDefined();
  });
  // it("NgOnInit  ", () => {
  //   component.id = "1";
  //   let response2 :any;
  //   spyOn(especialidadService,'findDoctor').and.returnValue(of(response2))
  //   component.getEspecialidad(1)
  //   fixture.detectChanges();    
    
  // });
  it("NgOnInit  ", () => {
    let response2 :any;
    spyOn(doctorService,'getDoctorId').and.returnValue(of(response2))
    component.getDoctor(1);
    fixture.detectChanges();    
    
  });
});
