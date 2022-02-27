import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentInformationComponent } from './appointment-information.component';

describe('AppointmentInformationComponent', () => {
  let component: AppointmentInformationComponent;
  let fixture: ComponentFixture<AppointmentInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
