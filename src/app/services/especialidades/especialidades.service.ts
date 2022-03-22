
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  private API_SERVER="http://localhost:8080/Especialidad";
  constructor(
    private httpClient: HttpClient
  ) { }


  public getAllEspecialidad():Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }


  public saveEspecialidad(especialidad:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,especialidad);
  }

}
