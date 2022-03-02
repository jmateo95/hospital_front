import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileLabComponent } from './editProfileLab.component';

describe('EditProfileComponent', () => {
  let component: EditProfileLabComponent;
  let fixture: ComponentFixture<EditProfileLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
