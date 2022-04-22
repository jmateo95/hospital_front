import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentCardComponent } from './appointment-card.component';

describe('AppointmentCardComponent', () => {
  let component: AppointmentCardComponent;
  let fixture: ComponentFixture<AppointmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentCardComponent);
    component = fixture.componentInstance;
    
    component.appointment = {
      doctor:{
        nombre:'juan'
      },
      especialidad:{
        nombre:'Pediatria'
      },
      fecha: '12/12/2022',
      hora:'07:00',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
