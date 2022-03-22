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

  setToken(user: any) {
    this.cookies.set("token", user);
  }
  getToken() {
    return this.cookies.get("token");
  }


  public Login(login:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER+"/login",login);
  }


}
