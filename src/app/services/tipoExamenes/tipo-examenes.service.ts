import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoExamenService {

  private API_SERVER = "http://localhost:8080/tipo-examen"
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllTiposExamen():Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public saveTipoExamen(tipoExamen:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, tipoExamen);
  }  

  public getTipoExamenId(id:any): Observable<any>{
    return this.httpClient.get(this.API_SERVER+"/"+id);
  }

  public updateTipoExamen(tipoExamen:any): Observable<any>{
    return this.httpClient.put(this.API_SERVER, tipoExamen);
  }
}
