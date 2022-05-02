import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeeDoctorsComponent } from './see-doctors.component';

describe('SeeDoctorsComponent', () => {
  let component: SeeDoctorsComponent;
  let fixture: ComponentFixture<SeeDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
        
      ],
      declarations: [ SeeDoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("updateDoctor ", () => {
    let id = 1;
    component.updateIdDoctor(id);
    fixture.detectChanges();
    expect(component.doctor_id).not.toBeNull();
  });
  it("UpdateEspecialidad ", () => {
    let id = 1;
    component.updateIdEspecialidad(id);
    fixture.detectChanges();
    expect(component.speciality).not.toBeNull();
  });
});
