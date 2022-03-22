import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LaboratoristaService {

  private API_SERVER = "http://localhost:8080/Laboratorista"
  constructor(
    private httpClient: HttpClient
  ) { }

  public saveLaboratorista(laboratorista:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, laboratorista);
  }

  public updateLaboratorista(laboratorista:any): Observable<any>{
    return this.httpClient.put(this.API_SERVER, laboratorista);
  }

  public getAllLaboratoristas(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public getLaboratoristaId(id:any): Observable<any>{
    return this.httpClient.get(this.API_SERVER+"/"+id);
  }
}