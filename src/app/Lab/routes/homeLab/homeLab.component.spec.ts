import { ComponentFixture, TestBed } from '@angular/core/testing';

import { homeLabComponent } from './homeLab.component';

describe('HomePatientComponent', () => {
  let component: homeLabComponent;
  let fixture: ComponentFixture<homeLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ homeLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(homeLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
