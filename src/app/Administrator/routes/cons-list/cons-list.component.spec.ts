import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsListComponent } from './cons-list.component';

describe('ConsListComponent', () => {
  let component: ConsListComponent;
  let fixture: ComponentFixture<ConsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
