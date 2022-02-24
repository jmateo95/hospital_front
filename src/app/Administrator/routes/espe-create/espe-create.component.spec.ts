import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeCreateComponent } from './espe-create.component';

describe('EspeCreateComponent', () => {
  let component: EspeCreateComponent;
  let fixture: ComponentFixture<EspeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
