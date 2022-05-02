import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../material/material.module';
import { OrdenService } from './orden.service';
import { of, throwError } from 'rxjs';

describe('OrdenService', () => {
  let service: OrdenService;
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
    service = TestBed.inject(OrdenService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new OrdenService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it ('countfilterCitasDoctorRecord', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getReport(1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
    });
  });
});
