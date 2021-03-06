import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientReportsComponent } from './patientReports.component';

describe('DoctorCreateComponent', () => {
  let component: PatientReportsComponent;
  let fixture: ComponentFixture<PatientReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
