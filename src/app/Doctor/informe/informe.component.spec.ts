import { ComponentFixture, TestBed } from '@angular/core/testing';

import { informeComponent } from './informe.component';

describe('RegisterComponent', () => {
  let component: informeComponent;
  let fixture: ComponentFixture<informeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ informeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(informeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
