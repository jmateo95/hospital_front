import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryReportPatientComponent } from './historyReportPatient.component';

describe('DoctorCreateComponent', () => {
  let component: HistoryReportPatientComponent;
  let fixture: ComponentFixture<HistoryReportPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryReportPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryReportPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
