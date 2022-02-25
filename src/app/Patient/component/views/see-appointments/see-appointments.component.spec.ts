import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAppointmentsComponent } from './see-appointments.component';

describe('SeeAppointmentsComponent', () => {
  let component: SeeAppointmentsComponent;
  let fixture: ComponentFixture<SeeAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
