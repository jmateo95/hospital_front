import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../material/material.module';
import { VigilantelabGuard } from './vigilantelab.guard';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

describe('VigilantelabGuard', () => {
  let guard: VigilantelabGuard;
  const routerMock = jasmine.createSpyObj('Router', ['navigate']);
  const authMock = jasmine.createSpyObj('AuthenticationService', ['isLoggedIn']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
      ],
    });
    guard = TestBed.inject(VigilantelabGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true for canActivate() and not set loginService.redirectUrl when isLoggedIn === true', ()=> {
    authMock.isLoggedIn.and.returnValue(true);
    const result = guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'full'});
    expect(result).toBe(true)
  });
  it('canActivateChild', ()=> {
    localStorage.removeItem('id_rol');
    authMock.isLoggedIn.and.returnValue(true);
    const result = guard.canActivateChild(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'login'});
    expect(result).toBe(true)
    localStorage.setItem('id_rol', '2');
    const result2 = guard.canActivateChild(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'login'});
    expect(result2).toBe(true)
    
  });


});
