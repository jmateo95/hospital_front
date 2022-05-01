import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../material/material.module';
import { PatientService } from './Patient.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Patient } from './Patient';

describe('PatientService', () => {
  let service: PatientService;
  let httpClientSpy: { post: jasmine.Spy, get:jasmine.Spy, put:jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
      ],
    });
    service = TestBed.inject(PatientService);
    //httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new PatientService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it ('getPatient', (done: DoneFn)=>{
    const lpat:Patient[]=[
      {
      'id': 'id',
      'sexo': 1,
      'fecha_nacimiento':new Date(),
      'telefono': 'telefono',
      'peso': 1,
      'tipo_sangre': 'uno',
      'nombre': 'string',
      'codigo': 'string',
      'email': 'string',
      'password': 'string',
      'dpi': 1
      }
    ];
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getPatient()
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });



  it ('getPatient', (done: DoneFn)=>{
    const lpat:Patient=
      {
      'id': 'id',
      'sexo': 1,
      'fecha_nacimiento':new Date(),
      'telefono': 'telefono',
      'peso': 1,
      'tipo_sangre': 'uno',
      'nombre': 'string',
      'codigo': 'string',
      'email': 'string',
      'password': 'string',
      'dpi': 1
      };
    httpClientSpy.post.and.returnValue(of(lpat));
    service.addPatient(lpat)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });


});
