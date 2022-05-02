import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../material/material.module';
import { EspecialidadesService } from './especialidades.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('EspecialidadesService', () => {
  let service: EspecialidadesService;
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
    service = TestBed.inject(EspecialidadesService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new EspecialidadesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it ('Guardar Especialidad', (done: DoneFn)=>{

    const mockCreateEspecialidad = {
      "codigo": "ESP1",
      "nombre": "pediatria",
      "costo": 150
    }

    const mockResultCreateEspecialidad = {
      "id": 1,
      "codigo": "ESP1",
      "nombre": "pediatria",
      "costo": 150
    }

    httpClientSpy.post.and.returnValue(of(mockResultCreateEspecialidad))


    service.saveEspecialidad(mockCreateEspecialidad)
      .subscribe(resultado => { 
        expect(resultado).toEqual(mockResultCreateEspecialidad)
        done()
      })

    
  });


  it(`Error al guardar la especialidad`, (done: DoneFn) => {
    //TODO: Mock de datos!

    const mockCreateEspecialidad = {
    }

    const error409 = new HttpErrorResponse({
      error: "Error al guardar la especialidad",
      status: 409, statusText: 'Not Found'
    });

    httpClientSpy.post.and.returnValue(throwError(error409))
    service.saveEspecialidad(mockCreateEspecialidad)
      .subscribe(res => {

      },
        error => {
          expect(error.status).toEqual(409);
          done()
        })
  });


  it ('getAllEspecialidad', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getAllEspecialidad()
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });

  it ('filterEspecialidad', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.filterEspecialidad(1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    })
  });

  it ('getEspecialidad', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getEspecialidad(1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    })
  });

  it ('filter', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.filter(1,1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
    service.filter("",1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
    service.filter(1,"",1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
    service.filter(1,1,"")
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
    service.filter("","","")
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
  });
  

  it ('count', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.count(1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
    service.count("",1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
    service.count(1,"")
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
    service.count("","")
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
  });












});

