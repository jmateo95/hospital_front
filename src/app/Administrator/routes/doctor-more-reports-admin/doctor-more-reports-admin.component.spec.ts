import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorReportsAdminComponent } from './doctor-more-reports-admin.component';

describe('DoctorRep1AdminComponent', () => {
  let component: DoctorReportsAdminComponent;
  let fixture: ComponentFixture<DoctorReportsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorReportsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorReportsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
