import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../material/material.module';
import { InformeService } from './informe.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


describe('InformeService', () => {
  let service: InformeService;
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
    service = TestBed.inject(InformeService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new InformeService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it ('Guardar Informe', (done: DoneFn)=>{

    const mockCreateInforme = {
      "id": 1,
      "cita": {
        "id": 1,
        "fecha": "2022-04-01T19:33:33.164Z",
        "hora": "2022-04-01T19:33:33.164Z",
        "codigo": "ESP1"
      },
      "descripcion": "El informe"
    }

    const mockResultCreateInforme = {
      "id": 1,
      "cita": {
        "id": 1,
        "fecha": "2022-04-01T19:33:33.164Z",
        "hora": "2022-04-01T19:33:33.164Z",
        "codigo": "ESP1"
      },
      "descripcion": "El informe"
    }

    httpClientSpy.post.and.returnValue(of(mockResultCreateInforme))


    service.saveReport(mockCreateInforme)
      .subscribe(resultado => { 
        expect(resultado).toEqual(mockResultCreateInforme)
        done()
      })

    
  });


  it(`Error al guardar el Informe`, (done: DoneFn) => {
    //TODO: Mock de datos!

    const mockCreateInforme = {
    }

    const error409 = new HttpErrorResponse({
      error: "Error al guardar el Informe",
      status: 409, statusText: 'Not Found'
    });

    httpClientSpy.post.and.returnValue(throwError(error409))
    service.saveReport(mockCreateInforme)
      .subscribe(res => {

      },
        error => {
          expect(error.status).toEqual(409);
          done()
        })
  })

});


