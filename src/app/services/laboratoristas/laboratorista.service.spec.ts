import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../material/material.module';
import { LaboratoristaService } from './laboratorista.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('LaboratoristaService', () => {
  let service: LaboratoristaService;
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
    service = TestBed.inject(LaboratoristaService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new LaboratoristaService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  it ('Guardar Laboratorista', (done: DoneFn)=>{

    const mockCreateLaboratorista = {
      "nombre": "Laboratorista",
      "codigo": "LAB01",
      "email": "lab@lab.com",
      "password": "1234",
      "dpi": 1234,
      "registro": 1234,
      "fecha": 123456,
      "fecha_inicio": "2022-04-01T19:44:06.000Z",
      "telefono": "123456",
    }

    const mockResultCreateLaboratorista = {
      "id": 1,
      "nombre": "Laboratorista",
      "codigo": "LAB01",
      "email": "lab@lab.com",
      "dpi": 1234,
      "rol": {
        "id": 3,
        "nombre": "Laboratorista",
        "descripcion": "Laboratorista en el sistema"
      },
      "registro": 1,
      "fecha": 1234,
      "fecha_inicio": "2022-04-01T19:44:06.005Z",
      "telefono": "12345",
    }

    httpClientSpy.post.and.returnValue(of(mockResultCreateLaboratorista))


    service.saveLaboratorista(mockCreateLaboratorista)
      .subscribe(resultado => { 
        expect(resultado).toEqual(mockResultCreateLaboratorista)
        done()
      })

    
  });


  it(`Error al guardar el Laboratorista`, (done: DoneFn) => {
    //TODO: Mock de datos!

    const mockCreateLaboratorista = {
    }

    const error409 = new HttpErrorResponse({
      error: "Error al guardar el Laboratorista",
      status: 409, statusText: 'Not Found'
    });

    httpClientSpy.post.and.returnValue(throwError(error409))
    service.saveLaboratorista(mockCreateLaboratorista)
      .subscribe(res => {

      },
        error => {
          expect(error.status).toEqual(409);
          done()
        })
  })

});