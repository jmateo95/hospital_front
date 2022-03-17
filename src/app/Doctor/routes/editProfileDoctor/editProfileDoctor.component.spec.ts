import { ComponentFixture, TestBed } from '@angular/core/testing';

import { editProfileDoctorComponent } from './editProfileDoctor.component';

describe('EditProfileComponent', () => {
  let component: editProfileDoctorComponent;
  let fixture: ComponentFixture<editProfileDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ editProfileDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(editProfileDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
