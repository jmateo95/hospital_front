import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorTopbarComponent } from './doctorTopbar.component';

describe('TopbarComponent', () => {
  let component: DoctorTopbarComponent;
  let fixture: ComponentFixture<DoctorTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorTopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
