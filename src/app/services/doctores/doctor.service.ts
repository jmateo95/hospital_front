import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DoctorService {
  private API_SERVER="http://localhost:8080/Doctor";
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllDoctor():Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public saveDoctor(persona:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,persona);
  }



}
