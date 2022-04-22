import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../material/material.module';
import { EspecialidadDoctorService } from './especialidad-doctor.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('EspecialidadDoctorService', () => {
  let service: EspecialidadDoctorService;
  let httpClientSpy: { post: jasmine.Spy };

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
    service = TestBed.inject(EspecialidadDoctorService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new EspecialidadDoctorService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it ('Añadir Especialidad', (done: DoneFn)=>{

    const mockCreateEspecialidadDoctor = {
      "id_doctor": 1,
      "id_especialidad": 1
    }

    const mockResultCreateEspecialidadDoctor = {
      "id": 1,
      "doctor": {
        "id": 1,
        "nombre": "Doctor 1",
        "codigo": "DOC1",
        "email": "doctor@doctor.com",
        "dpi": 1234,

        "colegiado": 1234,
        "fecha": "2022-04-01",
        "horaInicio": "07-00",
        "horaFin": "17:00",
        "telefono": "1234"
      },
      "especialidad": {
        "id": 1,
        "codigo": "ESP1",
        "nombre": "Pediatria",
        "costo": 150
      }
    }

    httpClientSpy.post.and.returnValue(of(mockResultCreateEspecialidadDoctor))


    service.saveEspecialidadDoctor(mockCreateEspecialidadDoctor)
      .subscribe(resultado => { 
        expect(resultado).toEqual(mockResultCreateEspecialidadDoctor)
        done()
      })

    
  });


  it(`Error al añadir la especialidad`, (done: DoneFn) => {
    //TODO: Mock de datos!

    const mockCreateEspecialidadDoctor = {
    }

    const error409 = new HttpErrorResponse({
      error: "Error al añadir la especialidad",
      status: 409, statusText: 'Not Found'
    });

    httpClientSpy.post.and.returnValue(throwError(error409))
    service.saveEspecialidadDoctor(mockCreateEspecialidadDoctor)
      .subscribe(res => {

      },
        error => {
          expect(error.status).toEqual(409);
          done()
        })
  })

});
