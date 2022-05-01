import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../material/material.module';
import { ExamenService } from './examen.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('PatientService', () => {
  let service: ExamenService;
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
    service = TestBed.inject(ExamenService);
    //httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new ExamenService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it ('getExamenes', (done: DoneFn)=>{
    const lpat=
      {
      'id': 'id',
      };
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getExamenes()
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });

  it ('getExamen', (done: DoneFn)=>{
    const lpat=
      {
      'id': 'id',
      };
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getExamen(1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });

  it ('getTestToday', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getTestToday(1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });

  it ('getUpcomingTest', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getUpcomingTest(1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });

  it ('getWeekTest', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getWeekTest(1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });


  it ('getRecordTest', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getRecordTest(1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });

  it ('getUpcomingTests', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getUpcomingTests(1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });

  it ('getRecordTests', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getRecordTests(1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });


  it ('filterTestsDate', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.filterTestsDate(1,1,1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });


  it ('filterTestsDateTipo', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.filterTestsDateTipo(1,1,1,1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });

  it ('countfilterTestsDateTipo', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.countfilterTestsDateTipo(1,1,1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });

  it ('filterTestsTipoRecord', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.filterTestsTipoRecord(1,1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });


  it ('filterTestsTipoRecord', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.filterTestsTipoRecord(1,1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });

  it ('countUpcomingTests', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.countUpcomingTests(1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });

  it ('countRecordTests', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.countRecordTests(1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });

  it ('countfilterTestsDate', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.countfilterTestsDate(1,1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });


  it ('filterTestsDateTipo', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.filterTestsDateTipo(1,1,1,1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });

  it ('countfilterTestsTipoUpcoming', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.countfilterTestsTipoUpcoming(1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });


  it ('filterTestsTipoUpcoming', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.filterTestsTipoUpcoming(1,1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });


  it ('countfilterTestsTipoRecord', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.countfilterTestsTipoRecord(1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });

  it ('getTodayTipoAppoiment', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getTodayTipoAppoiment(1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });


  it ('getDaysWithMoreTest', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getDaysWithMoreTest(1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });


  it ('getTestCosto', (done: DoneFn)=>{
    const lpat={'id': 'id',};
    httpClientSpy.get.and.returnValue(of(lpat));
    service.getTestCosto(1,1)
      .subscribe(resultado => { 
        expect(resultado).toEqual(lpat)
        done()
      })
  });
  
});
