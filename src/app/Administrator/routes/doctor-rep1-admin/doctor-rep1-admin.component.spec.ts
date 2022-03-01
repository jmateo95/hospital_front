import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRep1AdminComponent } from './doctor-rep1-admin.component';

describe('DoctorRep1AdminComponent', () => {
  let component: DoctorRep1AdminComponent;
  let fixture: ComponentFixture<DoctorRep1AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorRep1AdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorRep1AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
