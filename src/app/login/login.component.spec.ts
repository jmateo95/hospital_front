import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login.component';
import { UsuarioService } from '../services/usuario/usuario.service';
import { of } from 'rxjs/internal/observable/of';
import { Router} from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let examenService: UsuarioService;
  let router:Router;

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
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    examenService=TestBed.get(UsuarioService);
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
    spyOn(examenService, 'Login').and.returnValue(of(reponse));
    component.loginForm()
    fixture.detectChanges();
  });

  it('redirectsUser', () => {
    component.redirectsUser(1);
    fixture.detectChanges();
    component.redirectsUser(2);
    fixture.detectChanges();
    component.redirectsUser(3);
    fixture.detectChanges();
    component.redirectsUser(4);
    fixture.detectChanges();
  });




});
