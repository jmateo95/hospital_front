import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Examen, LabCreateComponent } from './lab-create.component';
import { of } from 'rxjs/internal/observable/of';
import { LaboratoristaService } from 'src/app/services/laboratoristas/laboratorista.service';

describe('LabCreateComponent', () => {
  let component: LabCreateComponent;
  let fixture: ComponentFixture<LabCreateComponent>;
  let laboratoristaService: LaboratoristaService;

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
      declarations: [ LabCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabCreateComponent);
    component = fixture.componentInstance;
    laboratoristaService=TestBed.get(LaboratoristaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("NG", () => {
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    spyOn(laboratoristaService, 'saveLaboratorista').and.returnValue(of(reponse));
    component.saveForm()
    fixture.detectChanges();
  });


  it('should return true from isAuthenticated when there is a token', () => { (1)
    let examen:any;
    expect(examen=new Examen(1,'1',1,true,'1','1','1')).toBeTruthy();
  });



});
