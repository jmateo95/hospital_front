import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsEditComponent } from './cons-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

describe('ConsEditComponent', () => {
  let component: ConsEditComponent;
  let fixture: ComponentFixture<ConsEditComponent>;

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
      declarations: [ ConsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsEditComponent);
    component = fixture.componentInstance;
    component.especialidad = {
      codigo: 'ESP01'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Guardar Informacion',()=>{
    component.especialidad.id=1;
    component.saveForm()
    expect(component.especialidadForm.value.id).toBe(1);

  });


});
