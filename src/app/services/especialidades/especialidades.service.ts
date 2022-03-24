
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ExceptionHandlerApi } from 'src/app/exception/exception';
import { Especialidad } from './especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService extends ExceptionHandlerApi {

  private API_SERVER = "http://localhost:8080/Especialidad";
  constructor(
    private httpClient: HttpClient) {
    super()
  }

  public saveEspecialidad(especialidad: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, especialidad);
  }

  public filterEspecialidad(name: string): Observable<Especialidad[]> {
    return this.httpClient.get<Especialidad[]>(this.API_SERVER + '/findname/' + name).pipe(catchError(err => this.errorHandler(err, 'ver')),);
  }

  public getEspecialidades():Observable<any> {
    return this.httpClient
        .get(this.API_SERVER ).pipe(catchError(err => this.errorHandler(err,'ver')),);
}

public getEspecialidad(id:any):Observable<any>{
  return this.httpClient
  .get(this.API_SERVER+'/'+id ).pipe(catchError(err => this.errorHandler(err,'ver')),);
}

}
