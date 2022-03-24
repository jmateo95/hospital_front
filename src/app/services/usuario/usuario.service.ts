import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private API_SERVER="http://localhost:8080/usuario";
  constructor(private cookies: CookieService, private httpClient: HttpClient) { }

  setUser(user: any) {
    this.cookies.set("id_user", user.id);
    this.cookies.set("id_rol", user.rol.id);
  }


  getUserId() {
    return this.cookies.get("id_user");
  }
  getRolId() {
    return this.cookies.get("id_rol");
  }

  logout(){
    this.cookies.delete("id_user");
    this.cookies.delete("id_rol");
    this.cookies.delete("token");
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

  getUserLogged2() {
    const id_user = this.getUserId();
    if(id_user){
      return this.httpClient.get(this.API_SERVER+"/"+id_user);
    }else{
      return null;
    }
  }


}
