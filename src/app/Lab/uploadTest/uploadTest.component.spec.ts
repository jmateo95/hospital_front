import { ComponentFixture, TestBed } from '@angular/core/testing';

import { uploadTestComponent } from './uploadTest.component';

describe('RegisterComponent', () => {
  let component: uploadTestComponent;
  let fixture: ComponentFixture<uploadTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ uploadTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(uploadTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
