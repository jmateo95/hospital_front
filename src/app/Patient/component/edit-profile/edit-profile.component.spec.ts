import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditProfileComponent } from './edit-profile.component';
import { SpyLocation } from '@angular/common/testing';
import { Location } from '@angular/common';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Patient } from 'src/app/services/pacientes/Patient';
import { of } from 'rxjs/internal/observable/of';
import { PatientService } from 'src/app/services/pacientes/Patient.service';

describe('EditProfileComponent', () => {
  let component: EditProfileComponent;
  let fixture: ComponentFixture<EditProfileComponent>; 
  let location: SpyLocation; 
  let patientService: PatientService;

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
      declarations: [ EditProfileComponent ],
      providers: [
        { provide: Location, useClass: SpyLocation }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileComponent);
    component = fixture.componentInstance;
    location = TestBed.get(Location);
    patientService = TestBed.get(PatientService);
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
  it("ngOn Init  ", () => {
    let user = {
      id :1,
      rol : {
        id : 1
      }
    }
    component.userService.setUser(user);
    let response2 = new Patient();
    spyOn(component.userService,'getUserById').and.returnValue(of(response2))
    component.ngOnInit();
    
  });

  it("edit Patient  ", () => {
    let user = {
      id :1,
      rol : {
        id : 1
      }
    }
    component.usuario = user;
    let response2 = new Patient();
    spyOn(patientService,'updatePatient').and.returnValue(of(response2))
    component.editPatient();
    
  });

});
