import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomePatientComponent } from './home-patient.component';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { of } from 'rxjs/internal/observable/of';
import { CitaService } from 'src/app/services/cita/cita.service';
import { ExamenService } from 'src/app/services/examenes/examen.service';

describe('HomePatientComponent', () => {
  let component: HomePatientComponent;
  let fixture: ComponentFixture<HomePatientComponent>;
  let userService: UsuarioService;
  let citasService : CitaService;
  let examenService : ExamenService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        MaterialModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule 
        
      ],
      declarations: [ HomePatientComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePatientComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UsuarioService)
    citasService = TestBed.get(CitaService)
    examenService = TestBed.get(ExamenService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    let user = {
      id :1,
      rol : {
        id : 1
      }
    }
    spyOn(userService,'getUserId').and.returnValue("1")
    spyOn(userService,'getUserById').and.returnValue(of(user))
    spyOn(citasService,'countUpcomingCitas').and.returnValue(of(1))
    spyOn(examenService,'countUpcomingTests').and.returnValue(of(1))
    component.ngOnInit()
    fixture.detectChanges();
    expect(component.next_appoint).toEqual(1)
    



  });
});
