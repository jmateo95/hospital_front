import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ServiceInformationComponent } from './service-information.component';
import { SpyLocation } from '@angular/common/testing';
import { CitaService } from 'src/app/services/cita/cita.service';
import { ExamenService } from 'src/app/services/examenes/examen.service';
import { of } from 'rxjs/internal/observable/of';
import { InformeService } from 'src/app/services/Informe/informe.service';
import { Cita } from 'src/app/services/cita/cita';
import { Examen } from 'src/app/services/examenes/examen';

describe('ServiceInformationComponent', () => {
  let component: ServiceInformationComponent;
  let fixture: ComponentFixture<ServiceInformationComponent>;  
  let location: SpyLocation; 
  let citaService: CitaService;
  let examenService: ExamenService;
  let informeService: InformeService;

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
      declarations: [ ServiceInformationComponent ],
      providers: [
        { provide: Location, useClass: SpyLocation }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInformationComponent);
    component = fixture.componentInstance;    
    location = TestBed.get(Location);
    citaService = TestBed.get(CitaService)
    examenService = TestBed.get(ExamenService)
    informeService = TestBed.get(InformeService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('return back', ()=>{
    spyOn(location, 'back').and.callFake(() => console.log("Test"));
    component.back();
    expect(component.back).toBeDefined();
  });

  it("appointment ", () => {
    let type = 'appointment';
    let reponse = new Cita();
    const response2 = [
      {
       descripcion: "texto largo",
     }
   ];
    spyOn(citaService, 'getCita').and.returnValue(of(reponse));
    spyOn(informeService, 'getInformeCita').and.returnValue(of(response2));
    
    component.verifyParams(type,1)
    fixture.detectChanges();
    expect(component.isExam).toBe(false)

  });

  it("Examen ", () => {
    let type = 'Examen';
    let reponse = new Examen();
    reponse.ordenDoc = "path";
    spyOn(examenService, 'getExamen').and.returnValue(of(reponse));
    component.verifyParams(type,1)
    fixture.detectChanges();
    expect(component.isExam).toBe(true)

  });

  it("Examen ", () => {
    let type = 'Examen';
    let reponse = new Examen();
    spyOn(examenService, 'getExamen').and.returnValue(of(reponse));
    component.verifyParams(type,1)
    fixture.detectChanges();
    expect(component.isExam).toBe(true)

  });
});
