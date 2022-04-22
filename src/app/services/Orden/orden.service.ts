import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
//import { saveAs } from 'file-saver';


@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private API_SERVER = environment.apiBaseUrl+"/orden";
  constructor( private httpClient: HttpClient) { }

  public getReport(informe:any): Observable<any>{
    return this.httpClient.get(this.API_SERVER, informe);
  }  

  /*public downloadPDF(informe:any): any {
  var mediaType = 'application/pdf';
    this.httpClient.post(this.API_SERVER, {location: "report.pdf" , params: informe}, {responseType: 'blob'}).subscribe(
        response => {
            var blob = new Blob([response], { type: mediaType });
            saveAs(blob, 'report.pdf');
        },
        e => { throwError(e); }
    );
  }*/
}
