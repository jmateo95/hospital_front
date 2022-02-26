import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsEditComponent } from './cons-edit.component';

describe('ConsEditComponent', () => {
  let component: ConsEditComponent;
  let fixture: ComponentFixture<ConsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
