import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ExceptionHandlerApi } from 'src/app/exception/exception';

@Injectable({
  providedIn: 'root'
})
export class TipoExamenService extends ExceptionHandlerApi {

  private API_SERVER = "http://localhost:8080/tipo-examen"
  constructor(
    private httpClient: HttpClient
  ) { 
    super()
  }

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

  public filterTipoExamen(name: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.API_SERVER + '/findname/' + name).pipe(catchError(err => this.errorHandler(err, 'ver')),);
  }
}
