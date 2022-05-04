import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ServicesTestComponent } from './services-test.component';
import { TipoExamenService } from 'src/app/services/tipoExamenes/tipo-examenes.service';
import { of } from 'rxjs/internal/observable/of';

describe('ServicesTestComponent', () => {
  let component: ServicesTestComponent;
  let fixture: ComponentFixture<ServicesTestComponent>;
  let tipoExamenService: TipoExamenService;

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
      declarations: [ ServicesTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesTestComponent);
    component = fixture.componentInstance;
    tipoExamenService = TestBed.get(TipoExamenService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("ngOnInit ", () => {
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    let response2 = 1;
    spyOn(tipoExamenService, 'getTiposExamen').and.returnValue(of(reponse));
    spyOn(tipoExamenService, 'countAll').and.returnValue(of(response2));
    
    component.ngOnInit()
    fixture.detectChanges();
    expect(component.test_length).toEqual(1);

  });

  it("filtrar ", () => {
    component.testN="1"
    component.costo="2.5"
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    let response2 = 1;
    spyOn(tipoExamenService, 'filter').and.returnValue(of(reponse));
    spyOn(tipoExamenService, 'count').and.returnValue(of(response2));
    
    component.filtrar()
    fixture.detectChanges();
    expect(component.test_length).toEqual(1);

  });
});
