import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRepAdminComponent } from './patient-rep-admin.component';

describe('PatientRepAdminComponent', () => {
  let component: PatientRepAdminComponent;
  let fixture: ComponentFixture<PatientRepAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRepAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRepAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
