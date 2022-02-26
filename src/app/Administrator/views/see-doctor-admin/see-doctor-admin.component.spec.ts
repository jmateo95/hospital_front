import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeDoctorAdminComponent } from './see-doctor-admin.component';

describe('SeeDoctorAdminComponent', () => {
  let component: SeeDoctorAdminComponent;
  let fixture: ComponentFixture<SeeDoctorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeDoctorAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeDoctorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
