import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRepComponent } from './doctor-rep.component';

describe('DoctorRepComponent', () => {
  let component: DoctorRepComponent;
  let fixture: ComponentFixture<DoctorRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorRepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
