import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../material/material.module';
import { CitaService } from './cita.service';
import { of, throwError } from 'rxjs';


describe('CitaService', () => {
  let service: CitaService;
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
    service = TestBed.inject(CitaService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new CitaService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it ('getCitas', (done: DoneFn)=>{


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

    httpClientSpy.get.and.returnValue(of(mockResultCreateDoctor))
    service.getCitas()
      .subscribe(resultado => { 
        expect(resultado).toEqual(mockResultCreateDoctor)
        done()
      })

    
  });



  it ('getCita', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getCita(1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
  });

  it ('getUpcomingCitas', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getUpcomingCitas(1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
  });

  it ('Crear Doctor', (done: DoneFn)=>{

    const cita= {
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
    service.addCita(cita)
      .subscribe(resultado => { 
        expect(resultado).toEqual(mockResultCreateDoctor)
        done()
      });
  });

  it ('getWeekCitas', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getWeekCitas(1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
  });

  it ('getRecordCitas', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getRecordCitas(1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
  });

  it ('filterCitasDate', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.filterCitasDate(1,1,1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
  });

  it ('filterCitasDateDoctor', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.filterCitasDateDoctor(1,1,1,1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
  });

  it ('filterCitasDoctorUpcoming', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.filterCitasDoctorUpcoming(1,1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
  });

  it ('filterCitasDoctorRecord', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.filterCitasDoctorRecord(1,1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
  });








  it ('countRecordCitas', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.countRecordCitas(1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
  });

  it ('countfilterCitasDate', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.countfilterCitasDate(1,1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
  });


  it ('countfilterCitasDateDoctor', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.countfilterCitasDateDoctor(1,1,1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
  });

  it ('countfilterCitasDoctorUpcoming', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.countfilterCitasDoctorUpcoming(1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
  });

  it ('countfilterCitasDoctorRecord', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.countfilterCitasDoctorRecord(1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
  });

});