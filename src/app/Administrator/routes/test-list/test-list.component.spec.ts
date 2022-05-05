import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Examen, TestListComponent } from './test-list.component';
import { TipoExamenService } from 'src/app/services/tipoExamenes/tipo-examenes.service';
import { of } from 'rxjs/internal/observable/of';

describe('TestListComponent', () => {
  let component: TestListComponent;
  let fixture: ComponentFixture<TestListComponent>;
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
      declarations: [ TestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestListComponent);
    component = fixture.componentInstance;
    tipoExamenService=TestBed.get(TipoExamenService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("filtrar Upcoming doctor", () => {
    let reponse: any;
    reponse = {
      content: [
      ]
    }
    spyOn(tipoExamenService, 'getAllTiposExamen').and.returnValue(of(reponse));
    component.ngOnInit()
    fixture.detectChanges();
  });


  it('should return true from isAuthenticated when there is a token', () => { (1)
    let examen:any;
    expect(examen=new Examen(1,'1',1,true,'1','1','1')).toBeTruthy();
  });





});
