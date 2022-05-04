import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTestComponent } from './create-test.component';
import { SpyLocation } from '@angular/common/testing';
import { Examen } from 'src/app/services/examenes/examen';
import { of } from 'rxjs/internal/observable/of';
import { ExamenService } from 'src/app/services/examenes/examen.service';

describe('CreateTestComponent', () => {
  let component: CreateTestComponent;
  let fixture: ComponentFixture<CreateTestComponent>;  
  let location: SpyLocation; 
  let examenService: ExamenService;

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
      declarations: [ CreateTestComponent ],      
      providers: [
        { provide: Location, useClass: SpyLocation }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestComponent);
    component = fixture.componentInstance;     
    location = TestBed.get(Location);
    examenService = TestBed.get(ExamenService)
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

  it("docUpload ", () => {
    let response :any;
   response = {
     body: {
       message: "Realizado"
     }
   }
    component.docUpload(response);
    fixture.detectChanges();
    expect(component.examen_save.ordenDoc).toEqual("Realizado");

  
  });

  it("UpdateIdTipo ", () => {
    let id = 1;
    let orden = true;
    let formato = "PDF"
    component.updateIdTipo(id,orden,formato);
    fixture.detectChanges();
    expect(component.examen_save.tipo.id).toEqual(1);

  
  });

  it("UpdateIdTipo PNG", () => {
    let id = 1;
    let orden = true;
    let formato = "PNG"
    component.updateIdTipo(id,orden,formato);
    fixture.detectChanges();
    expect(component.examen_save.tipo.id).toEqual(1);

  
  });

  it("UpdateIdTipo False", () => {
    let id = 1;
    let orden = false;
    let formato = "PNG"
    component.updateIdTipo(id,orden,formato);
    fixture.detectChanges();
    expect(component.examen_save.tipo.id).toEqual(1);

  
  });

  it("onAddExamen  ", () => {
    component.examen_save = new Examen();
    let user = {
      id :1,
      rol : {
        id : 1
      }
    }
    component.userService.setUser(user);
    component.examen_save.hora = "10:00";
    component.orden = false;
    let response2 = new Examen();
    spyOn(examenService,'addExamen').and.returnValue(of(response2))
    component.onAddExamen();
    expect(component.examen_save.hora).toEqual("10:00:00")
    
  });

  it("onAddExamen  ", () => {
    component.examen_save = new Examen();
    let user = {
      id :1,
      rol : {
        id : 1
      }
    }
    component.userService.setUser(user);
    component.examen_save.hora = "10:00";
    component.orden = true;
    let response2 = new Examen();
    spyOn(examenService,'addExamen').and.returnValue(of(response2))
    component.onAddExamen();
    expect(component.examen_save.hora).toEqual("10:00:00")
    
  });



});
