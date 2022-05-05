import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Examen, LabEditComponent } from './lab-edit.component';
import { LaboratoristaService } from 'src/app/services/laboratoristas/laboratorista.service';
import { TipoExamenService } from 'src/app/services/tipoExamenes/tipo-examenes.service';
import { of } from 'rxjs/internal/observable/of';

describe('LabEditComponent', () => {
  let component: LabEditComponent;
  let fixture: ComponentFixture<LabEditComponent>;
  let laboratoristaService:LaboratoristaService;
  let tipoExamenService:TipoExamenService;

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
      declarations: [ LabEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabEditComponent);
    component = fixture.componentInstance;
    laboratoristaService=TestBed.get(LaboratoristaService);
    tipoExamenService=TestBed.get(TipoExamenService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should return true from isAuthenticated when there is a token', () => { (1)
    let examen:any;
    expect(examen=new Examen(1,'1',1,true,'1','1','1')).toBeTruthy();
  });


  it("updateLaboratorista", () => {
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    spyOn(laboratoristaService, 'updateLaboratorista').and.returnValue(of(reponse));
    component.saveForm()
    fixture.detectChanges();
  });

  it("NG", () => {
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    spyOn(tipoExamenService, 'getAllTiposExamen').and.returnValue(of(reponse));
    component.ngOnInit()
    fixture.detectChanges();
  });


});
