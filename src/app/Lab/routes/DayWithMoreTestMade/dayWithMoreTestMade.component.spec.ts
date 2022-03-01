import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayWithMoreTestMadeComponent } from './dayWithMoreTestMade.component';

describe('DoctorCreateComponent', () => {
  let component: DayWithMoreTestMadeComponent;
  let fixture: ComponentFixture<DayWithMoreTestMadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayWithMoreTestMadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayWithMoreTestMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
