import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ExceptionHandlerApi } from 'src/app/exception/exception';

@Injectable({
  providedIn: 'root'
})


export class DoctorService extends ExceptionHandlerApi {
  private API_SERVER="http://localhost:8080/Doctor";
  constructor(
    private httpClient: HttpClient
  ) { 
    super()
  }

  public getAllDoctor():Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public saveDoctor(doctor:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,doctor);
  }

  public getDoctorId(id:any):Observable<any>{
    return this.httpClient.get(this.API_SERVER+"/"+id);
  }

  public editDoctor(doctor:any):Observable<any>{
    return this.httpClient.put(this.API_SERVER, doctor)
  }

  public filterDoctor(name: string): Observable<any> {
    return this.httpClient.get(`${this.API_SERVER}/findname/`+name).pipe(catchError(err => this.errorHandler(err,'ver')),);
}

}
