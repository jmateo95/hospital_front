import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorEditComponent } from './doctor-edit.component';
import { DoctorService } from '../../../services/doctores/doctor.service';
import { EspecialidadDoctorService } from '../../../services/especialidad_doctor/especialidad-doctor.service';
import { of } from 'rxjs/internal/observable/of';

describe('DoctorEditComponent', () => {
  let component: DoctorEditComponent;
  let fixture: ComponentFixture<DoctorEditComponent>;
  let especialidadDoctorService: EspecialidadDoctorService;
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
      declarations: [ DoctorEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorEditComponent);
    component = fixture.componentInstance;
    especialidadDoctorService=TestBed.get(EspecialidadDoctorService);
    doctorService=TestBed.get(DoctorService);
    
    component.doctor = {
      codigo:'ESP1'
    };


    component.doctorespecialidad=[
      {
        especialidad:{
          codigo:'ESP1'
        }
      }
    ];
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
    spyOn(especialidadDoctorService, 'saveEspecialidadDoctor').and.returnValue(of(reponse));
    component.saveEspecialidad()
    fixture.detectChanges();
  });


  it("NG", () => {
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    spyOn(especialidadDoctorService, 'deleteEspecialidadDoctor').and.returnValue(of(reponse));
    component.deleteespecialidad(1)
    fixture.detectChanges();
  });
  


});
