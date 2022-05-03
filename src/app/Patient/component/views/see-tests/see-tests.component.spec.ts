import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeeTestsComponent } from './see-tests.component';
import { ExamenService } from 'src/app/services/examenes/examen.service';
import { of } from 'rxjs/internal/observable/of';

describe('SeeTestsComponent', () => {
  let component: SeeTestsComponent;
  let fixture: ComponentFixture<SeeTestsComponent>;
  let tipoExamen: ExamenService;

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
      declarations: [ SeeTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeTestsComponent);
    component = fixture.componentInstance;
    tipoExamen = TestBed.get(ExamenService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("updateTipo ", () => {
    let id = 1;
    component.updateIdTipo(id);
    fixture.detectChanges();
    expect(component.tipo_id).not.toBeNull();
  });
  it("filtrar todo Upcoming", () => {
    component.start_date = null;
    component.end_date = null;
    component.tipo_id = null;
    component.upcoming = true;
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    let response2 = 1;
    spyOn(tipoExamen, 'getUpcomingTest').and.returnValue(of(reponse));    
    spyOn(tipoExamen, 'countUpcomingTests').and.returnValue(of(response2));
    component.filtrar()
    fixture.detectChanges();
  });

  it("filtrar todo Record", () => {
    component.start_date = null;
    component.end_date = null;
    component.tipo_id = null;
    component.upcoming = false;
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    let response2 = 1;
    spyOn(tipoExamen, 'getRecordTest').and.returnValue(of(reponse));
    spyOn(tipoExamen, 'countRecordTests').and.returnValue(of(response2));
    component.filtrar()
    fixture.detectChanges();
  });

  it("filtrar Upcoming tipo", () => {
    component.start_date = null;
    component.end_date = null;
    component.tipo_id = 1;
    component.upcoming = true;
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    let response2 = 1;
    spyOn(tipoExamen, 'filterTestsTipoUpcoming').and.returnValue(of(reponse));
    spyOn(tipoExamen, 'countfilterTestsTipoUpcoming').and.returnValue(of(response2));
    component.filtrar()
    fixture.detectChanges();
  });

  it("filtrar Record tipo", () => {
    component.start_date = null;
    component.end_date = null;
    component.tipo_id = 1;
    component.upcoming = false;
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    let response2 = 1;
    spyOn(tipoExamen, 'filterTestsTipoRecord').and.returnValue(of(reponse));
    spyOn(tipoExamen, 'countfilterTestsTipoRecord').and.returnValue(of(response2));
    component.filtrar()
    fixture.detectChanges();
  });

  it("filtrar  fechas", () => {
    component.start_date = new Date();
    component.end_date = new Date();
    component.tipo_id = null;
    component.upcoming = true;
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    let response2 = 1;
    spyOn(tipoExamen, 'filterTestsDate').and.returnValue(of(reponse));
    spyOn(tipoExamen, 'countfilterTestsDate').and.returnValue(of(response2));
    component.filtrar()
    fixture.detectChanges();
  });

  it("filtrar fechas, tipo", () => {
    component.start_date = new Date();
    component.end_date = new Date();
    component.tipo_id = 1;
    component.upcoming = true;
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    let response2 = 1;
    spyOn(tipoExamen, 'filterTestsDateTipo').and.returnValue(of(reponse));
    spyOn(tipoExamen, 'filterTestsDate').and.returnValue(of(response2));
    component.filtrar()
    fixture.detectChanges();
  });
});
