import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsCreateComponent } from './cons-create.component';

describe('ConsCreateComponent', () => {
  let component: ConsCreateComponent;
  let fixture: ComponentFixture<ConsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
