import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAppointmentComponent } from './services-appointment.component';

describe('ServicesAppointmentComponent', () => {
  let component: ServicesAppointmentComponent;
  let fixture: ComponentFixture<ServicesAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
