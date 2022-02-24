import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTopbarComponent } from './LabTopbar.component';

describe('LabTopbarComponent', () => {
  let component: LabTopbarComponent;
  let fixture: ComponentFixture<LabTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabTopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
