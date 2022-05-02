import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../material/material.module';
import { DoctorService } from './doctor.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('DoctorService', () => {
  let service: DoctorService;
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
        ToastrModule.forRoot(),
      ],
    });
    service = TestBed.inject(DoctorService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new DoctorService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it ('Crear Doctor', (done: DoneFn)=>{

    const mockCreateDoctor = {
      "nombre": "Doctor 1",
      "codigo": "DOC2",
      "email": "docot@docotr.com",
      "password": "1234",
      "dpi": 0,
      "colegiado": 0,
      "fecha": "2022-04-01",
      "horaInicio": "07:00",
      "horaFin": "17:00",
      "telefono": "1234"
    }

    const mockResultCreateDoctor = {
      "id": 1,
      "nombre": "Doctor 1",
      "codigo": "DOC2",
      "email": "docot@docotr.com",
      "password": "1234",
      "dpi": 0,
      "rol": {
        "id": 2,
        "nombre": "Medico",
        "descripcion": "Meidico en el sistema"
      },
      "colegiado": 0,
      "fecha": "2022-04-01",
      "horaInicio": "07:00",
      "horaFin": "17:00",
      "telefono": "1234"
    }

    httpClientSpy.post.and.returnValue(of(mockResultCreateDoctor))


    service.saveDoctor(mockCreateDoctor)
      .subscribe(resultado => { 
        expect(resultado).toEqual(mockResultCreateDoctor)
        done()
      })

    
  });


  it(`Error al Crear Doctor`, (done: DoneFn) => {
    //TODO: Mock de datos!

    const mockCreateDoctor = {
    }

    const error409 = new HttpErrorResponse({
      error: "Error al crear el doctor",
      status: 409, statusText: 'Not Found'
    });

    httpClientSpy.post.and.returnValue(throwError(error409))
    service.saveDoctor(mockCreateDoctor)
      .subscribe(res => {

      },
        error => {
          expect(error.status).toEqual(409);
          done()
        })
  });

  it ('filterDoctor', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.filterDoctor("",1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
    service.filterDoctor(1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
  });

});