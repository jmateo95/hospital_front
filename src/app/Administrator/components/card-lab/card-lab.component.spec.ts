import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLabComponent } from './card-lab.component';

describe('CardLabComponent', () => {
  let component: CardLabComponent;
  let fixture: ComponentFixture<CardLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
