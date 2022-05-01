import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../material/material.module';
import { UsuarioService } from './usuario.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let httpClientSpy: { post: jasmine.Spy };

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
    service = TestBed.inject(UsuarioService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new UsuarioService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('setUser', () => {
    let user={
        'id':1,
        'rol':{
          'id':1
        }
    }
    expect(service.setUser(user)).toEqual(1);
    
  });


  it('getUserId',() =>{
    localStorage.setItem('id_user', '1');
    expect(service.getUserId()).toEqual('1');

  });

  it('getRolId',() =>{
    localStorage.setItem('id_rol', '1');
    expect(service.getRolId()).toEqual('1');

  });

  it('GetUserLoges', () => {
    const user={ id_user: 1, id_rol: 1 };
    localStorage.setItem('id_user', '1');
    localStorage.setItem('id_rol', '1');
    expect(service.getUserLogged()).toEqual(user);
    
  });

  
  it ('Revisar el get usuario', ()=>{
    localStorage.setItem('id_user', '1');
    expect(service.getUserId()).toEqual('1');   
  });

  it ('Revisar el get rol', ()=>{
    localStorage.setItem('id_rol', '1');
    expect(service.getRolId()).toEqual('1');   
  });


  
  it ('Revisar login', (done: DoneFn)=>{

    const mockUserCredentials = {
      "email": "admin@admin.com",
      "password": "1234"
    }

    const mockResultLogin = {
      "id": 1,
      "nombre": "Administrador",
      "codigo": "ADMIN1",
      "email": "admin@admin.com",
      "password": "$2a$10$1fD84mhSCniXN5bpQnV5SusvxadcG9ngqdTrOKsj8mDKfukGbtJmq",
      "dpi": 12345,
      "rol": {
        "id": 1,
        "nombre": "Admin",
        "descripcion": "Administrador del sistema"
      }
    }

    httpClientSpy.post.and.returnValue(of(mockResultLogin))


    service.Login(mockUserCredentials)
      .subscribe(resultado => { 
        expect(resultado).toEqual(mockResultLogin)
        done()
      })

    
  });


  it(`Error usuario invalido 409`, (done: DoneFn) => {
    //TODO: Mock de datos!

    const mockUserCredentials = {
      email: 'admin1@admin1.com',
      password: ''
    }

    const error409 = new HttpErrorResponse({
      error: "Invalid user",
      status: 409, statusText: 'Not Found'
    });

    httpClientSpy.post.and.returnValue(throwError(error409))
    service.Login(mockUserCredentials)
      .subscribe(res => {

      },
        error => {
          expect(error.status).toEqual(409);
          done()
        })
  });


  it('logout', () => {
    // spyOn(service, 'logout').and.callThrough(); 
    // expect(service.logout()).toHaveBeenCalled();
    expect(service.logout()).toEqual();
    
  });

  it('getUserLogged2', () => {
    localStorage.removeItem('id_user');
    localStorage.removeItem('id_rol');
    expect(service.getUserLogged2()).toEqual(null);
    
  });



});