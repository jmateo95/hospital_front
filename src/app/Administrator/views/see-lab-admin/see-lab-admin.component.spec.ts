import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeLabAdminComponent } from './see-lab-admin.component';

describe('SeeLabAdminComponent', () => {
  let component: SeeLabAdminComponent;
  let fixture: ComponentFixture<SeeLabAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeLabAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeLabAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
