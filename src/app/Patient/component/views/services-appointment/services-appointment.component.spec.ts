import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ServicesAppointmentComponent } from './services-appointment.component';
import { EspecialidadesService } from 'src/app/services/especialidades/especialidades.service';
import { of } from 'rxjs/internal/observable/of';

describe('ServicesAppointmentComponent', () => {
  let component: ServicesAppointmentComponent;
  let fixture: ComponentFixture<ServicesAppointmentComponent>;
  let especialidadService: EspecialidadesService;

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
      declarations: [ ServicesAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAppointmentComponent);
    component = fixture.componentInstance;
    especialidadService = TestBed.get(EspecialidadesService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("filtrar ", () => {
    component.especialidadN="1"
    component.costo="2.5"
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    let response2 = 1;
    spyOn(especialidadService, 'filter').and.returnValue(of(reponse));
    spyOn(especialidadService, 'count').and.returnValue(of(response2));
    
    component.filtrar()
    fixture.detectChanges();
    expect(component.especialidad_length).toEqual(1);

  });

  it("ngOnInit ", () => {
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    let response2 = 1;
    spyOn(especialidadService, 'getEspecialidades').and.returnValue(of(reponse));
    spyOn(especialidadService, 'countAll').and.returnValue(of(response2));
    
    component.ngOnInit()
    fixture.detectChanges();
    expect(component.especialidad_length).toEqual(1);

  });
});
