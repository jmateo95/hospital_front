import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsMadeComponent } from './examsMade.component';

describe('ConsListComponent', () => {
  let component: ExamsMadeComponent;
  let fixture: ComponentFixture<ExamsMadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamsMadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
