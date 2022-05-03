import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../material/material.module';
import { CitaExamenesService } from './cita-examenes.service';
import { of } from 'rxjs';

describe('CitaExamenesService', () => {
  let service: CitaExamenesService;
  let httpClientSpy: { post: jasmine.Spy, get:jasmine.Spy, put:jasmine.Spy, delete:jasmine.Spy };

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
    service = TestBed.inject(CitaExamenesService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post','delete']);
    service = new CitaExamenesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('saveAppimentTest', (done: DoneFn)=>{
    const examen= {
      "nombre": "Doctor 1",
      "codigo": "DOC2",
      "email": "docot@docotr.com",
      "password": "1234",
    }

    const mockResultCreateDoctor = {
      "id": 1,
      "nombre": "Doctor 1",
      "codigo": "DOC2",
      "email": "docot@docotr.com",
      "password": "1234",
      "dpi": 0
    }

    httpClientSpy.post.and.returnValue(of(mockResultCreateDoctor))
    service.saveAppimentTest(examen)
      .subscribe(resultado => { 
        expect(resultado).toEqual(mockResultCreateDoctor)
        done()
      });
  });







});
