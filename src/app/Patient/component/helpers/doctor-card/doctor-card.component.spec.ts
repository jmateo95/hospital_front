import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DoctorCardComponent } from './doctor-card.component';
import { EspecialidadDoctorService } from 'src/app/services/especialidad_doctor/especialidad-doctor.service';
import { Doctor } from 'src/app/services/doctores/doctor';
import { of } from 'rxjs/internal/observable/of';

describe('DoctorCardComponent', () => {
  let component: DoctorCardComponent;
  let fixture: ComponentFixture<DoctorCardComponent>;
  let especialidadService: EspecialidadDoctorService;

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
      declarations: [ 
        DoctorCardComponent,
        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorCardComponent);
    component = fixture.componentInstance;
    especialidadService = TestBed.get(EspecialidadDoctorService);
    component.doctor = {
      nombre: 'Docotor'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it("NgOnInit  ", () => {
    component.id = "1";
    let response2 :any;
    spyOn(especialidadService,'findDoctor').and.returnValue(of(response2))
    component.ngOnInit()
    fixture.detectChanges();    
    
  });
});
