import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ExceptionHandlerApi } from 'src/app/exception/exception';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TipoExamenService extends ExceptionHandlerApi {

  private API_SERVER = environment.MicroEntities+"/tipo-examen"
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

  public countAll(): Observable<any> {
    return this.httpClient.get(this.API_SERVER+"/count");
  }

  public getTiposExamen(): Observable<any>{
    return this.httpClient
      .get(this.API_SERVER+"?page=0&size=6").pipe(catchError(err => this.errorHandler(err, 'ver')),);
  }



  public filter(tipoExamen:any,cost:any): Observable<any>{
    console.log(tipoExamen)
    if (tipoExamen!="" && cost!="") {
      return this.httpClient
      .get(this.API_SERVER+"/filterbynameandcost/"+tipoExamen+"/"+cost).pipe(catchError(err => this.errorHandler(err, 'ver')),);
    }else if(tipoExamen!=""){
      return this.httpClient
      .get(this.API_SERVER+"/filterbyname/"+tipoExamen).pipe(catchError(err => this.errorHandler(err, 'ver')),);
    }else if(cost!=""){
      return this.httpClient
      .get(this.API_SERVER+"/filterbycost/"+cost).pipe(catchError(err => this.errorHandler(err, 'ver')),);
    }else{
      return this.httpClient
      .get(this.API_SERVER+"?page=0&size=6").pipe(catchError(err => this.errorHandler(err, 'ver')),);
    }
  }

  public count(tipoExamen:any,cost:any): Observable<any>{
    if (tipoExamen!="" && cost!="") {
      return this.httpClient
      .get(this.API_SERVER+"/count/filterbynameandcost/"+tipoExamen+"/"+cost).pipe(catchError(err => this.errorHandler(err, 'ver')),);
    }else if(tipoExamen!=""){
      return this.httpClient
      .get(this.API_SERVER+"/count/filterbyname/"+tipoExamen).pipe(catchError(err => this.errorHandler(err, 'ver')),);
    }else  if(cost!=""){
      return this.httpClient
      .get(this.API_SERVER+"/count/filterbycost/"+cost).pipe(catchError(err => this.errorHandler(err, 'ver')),);
    }else{
      return this.httpClient.get(this.API_SERVER+"/count");
    }
  }
}
