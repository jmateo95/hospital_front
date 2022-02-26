import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTestsComponent } from './see-tests.component';

describe('SeeTestsComponent', () => {
  let component: SeeTestsComponent;
  let fixture: ComponentFixture<SeeTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
