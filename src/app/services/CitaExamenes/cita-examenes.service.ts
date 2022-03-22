import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CitaExamenesService {

  private API_SERVER = environment.apiBaseUrl+"/Examen";
  constructor( private httpClient: HttpClient) { }

  public saveAppimentTest(test:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, test);
  }  

}

