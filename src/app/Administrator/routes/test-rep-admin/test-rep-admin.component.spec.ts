import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRepAdminComponent } from './test-rep-admin.component';

describe('TestRepAdminComponent', () => {
  let component: TestRepAdminComponent;
  let fixture: ComponentFixture<TestRepAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRepAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRepAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
