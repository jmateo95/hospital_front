import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InformeService {

  private API_SERVER = environment.apiBaseUrl+"/informe";
  constructor( private httpClient: HttpClient) { }

  public saveReport(informe:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, informe);
  }  
}