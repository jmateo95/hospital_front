import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private API_SERVER = environment.apiBaseUrl+"/usuario";
  constructor(private cookies: CookieService, private httpClient: HttpClient) { }

  setUser(user: any) {
    localStorage.setItem('id_user', user.id);
    localStorage.setItem('id_rol', user.rol.id);
    //this.cookies.set('id_user', user.id, 4, '/');
    //this.cookies.set('id_rol', user.rol.id, 4, '/');
  }


  getUserId() {
    return  localStorage.getItem('id_user');
    //return this.cookies.get('id_user');
  }
  getRolId() {
    return  localStorage.getItem('id_rol');
    //return this.cookies.get('id_rol');
  }

  logout(){
    localStorage.removeItem('id_user');
    localStorage.removeItem('id_rol');
    // this.cookies.delete('id_user');
    // this.cookies.delete('id_rol');
    // this.cookies.delete('token');
  }

  public Login(login:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER+"/login",login);
  }


  getUserLogged(){
    const id_user = Number(this.getUserId());
    if(id_user){
      let user:any={
        id_user:id_user,
        id_rol:Number(this.getRolId()),
      }
      return user;
    }else{
      return null;
    }
  }
  
  
  public getUserById(id:any):Observable<any>{    
    return this.httpClient.get(this.API_SERVER+"/"+id);
  }

  public getUserLogged2() {
    const id_user = this.getUserId();
    if(id_user){
      return this.httpClient.get(this.API_SERVER+"/"+id_user);
    }else{
      return null;
    }
  }


}
