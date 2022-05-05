import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Cita, Examen, Laboratorista, OrderComponent, Patients } from './order.component';
import { OrdenService } from 'src/app/services/Orden/orden.service';
import { of } from 'rxjs/internal/observable/of';
import { LaboratoristaService } from 'src/app/services/laboratoristas/laboratorista.service';
import { CitaService } from 'src/app/services/cita/cita.service';

describe('DoctorCreateComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let tipoExamenService: OrdenService;
  let citasService: CitaService;
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
      declarations: [ OrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    tipoExamenService=TestBed.get(OrdenService);
    citasService=TestBed.get(CitaService);
    laboratoristaService=TestBed.get(LaboratoristaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('Create Examen', () => { (1)
    let examen:any;
    expect(examen=new Examen(1,'1',1,true,'1','1','1')).toBeTruthy();
    let examen1:any;
    expect(examen1=new Laboratorista(1,'1',examen)).toBeTruthy();
  });
  it('Create Patients', () => { (1)
    let examen:any;
    expect(examen=new Patients(1,'1','1')).toBeTruthy();
    let examen1:any;
    expect(examen1=new Cita(1,examen)).toBeTruthy();
  });


  it("nGonint", () => {
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    spyOn(tipoExamenService, 'getReport').and.returnValue(of(reponse));
    component.saveForm()
    fixture.detectChanges();
  });


  it("ngOnInit 1", () => {
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    spyOn(laboratoristaService, 'getAllLaboratoristas').and.returnValue(of(reponse));
    component.ngOnInit()
    fixture.detectChanges();
  });

});
