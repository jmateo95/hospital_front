import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAppointmentComponent } from './create-appointment.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SpyLocation } from '@angular/common/testing';
import { EspecialidadesService } from 'src/app/services/especialidades/especialidades.service';
import { of } from 'rxjs/internal/observable/of';
import { Cita } from 'src/app/services/cita/cita';
import { Especialidad } from 'src/app/services/especialidades/especialidad';
import { CitaService } from 'src/app/services/cita/cita.service';
import { DoctorService } from 'src/app/services/doctores/doctor.service';
import { Doctor } from 'src/app/services/doctores/doctor';

describe('CreateAppointmentComponent', () => {
  let component: CreateAppointmentComponent;
  let fixture: ComponentFixture<CreateAppointmentComponent>;
  let location: SpyLocation;
  let especialidadService: EspecialidadesService; 
  let doctorService: DoctorService; 
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
      declarations: [ CreateAppointmentComponent ],
      providers: [
        { provide: Location, useClass: SpyLocation }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppointmentComponent);
    component = fixture.componentInstance;    
    location = TestBed.get(Location);
    especialidadService = TestBed.get(EspecialidadesService);
    citaService = TestBed.get(CitaService);
    doctorService = TestBed.get(DoctorService);
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
  it("Update Id Doctor ", () => {
    
    component.updateIdDoctor(1);
    fixture.detectChanges();
    expect(component.cita_save.doctor.id).toEqual(1);

  
  });

  it("Update Id Especialidad ", () => {
    
    component.updateIdEspecialidad(1);
    fixture.detectChanges();
    expect(component.cita_save.especialidad.id).toEqual(1);

  
  });

  it("GetEspeciality ", () => {
    component.speciality = 0;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.cita_save.especialidad.id).toEqual(null);

  
  });

  it("GetJustDoctor  ", () => {
    let response2 = new Doctor();    
    response2.nombre = "Tomografia"
    spyOn(doctorService,'getDoctorId').and.returnValue(of(response2))
    component.getEspecialidad(0,1)
    fixture.detectChanges();
    expect(component.cita_save.doctor.id).toEqual(1);
  });



  it("Get JusEspeciality  ", () => {
    let response = new Especialidad();
    response.nombre = "Tomografia"
    spyOn(especialidadService,'getEspecialidad').and.returnValue(of(response))
    component.getEspecialidad(1,0)
    fixture.detectChanges();
    expect(component.cita_save.especialidad.id).toEqual(1);    
  });

  it("GetEspecialityAndDoctor  ", () => {
    let response2 = new Doctor();
    response2.nombre = "Tomografia"
    spyOn(doctorService,'getDoctorId').and.returnValue(of(response2))
    component.getEspecialidad(1,1)
    fixture.detectChanges();
    expect(component.cita_save.doctor.id).toEqual(1);
    
  });

  it("onAddCita  ", () => {
    component.cita_save = new Cita();
    let user = {
      id :1,
      rol : {
        id : 1
      }
    }
    component.userService.setUser(user);
    component.cita_save.hora = "10:00";
    let response2 = new Doctor();
    spyOn(citaService,'addCita').and.returnValue(of(response2))
    component.onAddCita();
    
  });
});
