import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../material/material.module';
import { TipoExamenService } from './tipo-examenes.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('TipoExamenesService', () => {
  let service: TipoExamenService;
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
    service = TestBed.inject(TipoExamenService);
    //httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new TipoExamenService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('Guardar TipoExamen', (done: DoneFn)=>{

    const mockCreateTipoExamen = {
      "nombre": "Urologia",
      "costo": 150,
      "orden": false,
      "codigo": "EXA01",
      "descripcion": "examen de urologia",
      "formatoInforme": "si"
    }

    const mockResultCreateTipoExamen = {
      "id":1,
      "nombre": "Urologia",
      "costo": 150,
      "orden": false,
      "codigo": "EXA01",
      "descripcion": "examen de urologia",
      "formatoInforme": "si"
    }

    httpClientSpy.post.and.returnValue(of(mockResultCreateTipoExamen))


    service.saveTipoExamen(mockCreateTipoExamen)
      .subscribe(resultado => { 
        expect(resultado).toEqual(mockResultCreateTipoExamen)
        done()
      })

    
  });

  it ('getAllTiposExamen', (done: DoneFn)=>{
    const mockResultCreateTipoExamen = {
      "id":1,
      "nombre": "Urologia",
      "costo": 150,
      "orden": false,
      "codigo": "EXA01",
      "descripcion": "examen de urologia",
      "formatoInforme": "si"
    }
    httpClientSpy.get.and.returnValue(of(mockResultCreateTipoExamen));
    service.getAllTiposExamen()
      .subscribe(resultado => { 
        expect(resultado).toEqual(mockResultCreateTipoExamen)
        done()
      })
  });


  

  it ('filterTipoExamen', (done: DoneFn)=>{
    const mockResultCreateTipoExamen = {
      "id":1,
      "nombre": "Urologia",
      "costo": 150,
      "orden": false,
      "codigo": "EXA01",
      "descripcion": "examen de urologia",
      "formatoInforme": "si"
    }
    httpClientSpy.get.and.returnValue(of([mockResultCreateTipoExamen]));
    service.filterTipoExamen('urologia')
      .subscribe(resultado => { 
        expect(resultado).toEqual([mockResultCreateTipoExamen])
        done()
      })
  });



  it ('filter', (done: DoneFn)=>{
    const mockResultCreateTipoExamen = {
      "id":1,
      "nombre": "Urologia",
      "costo": 150,
      "orden": false,
      "codigo": "EXA01",
      "descripcion": "examen de urologia",
      "formatoInforme": "si"
    }
    httpClientSpy.get.and.returnValue(of(mockResultCreateTipoExamen));
    service.filter('urologia',1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(mockResultCreateTipoExamen)
        done()
      });
    
      service.filter('','10','10')
      .subscribe(resultado => { 
        expect(resultado).toEqual(mockResultCreateTipoExamen)
        done()
      }
      );
  });


  it ('count', (done: DoneFn)=>{
    const mockResultCreateTipoExamen = {
      "id":1,
      "nombre": "Urologia",
      "costo": 150,
      "orden": false,
      "codigo": "EXA01",
      "descripcion": "examen de urologia",
      "formatoInforme": "si"
    }
    httpClientSpy.get.and.returnValue(of(mockResultCreateTipoExamen));
    service.count('urologia',1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(mockResultCreateTipoExamen)
        done()
      });
    
      service.count('','10')
      .subscribe(resultado => { 
        expect(resultado).toEqual(mockResultCreateTipoExamen)
        done()
      }
      );
  });





  it(`Error al guardar el TipoExamen`, (done: DoneFn) => {
    //TODO: Mock de datos!

    const mockCreateTipoExamen = {
    }

    const error409 = new HttpErrorResponse({
      error: "Error al guardar el TipoExamen",
      status: 409, statusText: 'Not Found'
    });

    httpClientSpy.post.and.returnValue(throwError(error409))
    service.saveTipoExamen(mockCreateTipoExamen)
      .subscribe(res => {

      },
        error => {
          expect(error.status).toEqual(409);
          done()
        })
  });




  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
