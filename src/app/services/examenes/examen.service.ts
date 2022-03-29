import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { Examen } from "./examen";
import { environment } from "src/environments/environment";
import { ExceptionHandlerApi } from "../../exception/exception";


@Injectable({
    providedIn: 'root'
})

export class ExamenService extends ExceptionHandlerApi{
    private apiServerUrl = environment.apiBaseUrl+"/Examen";

    constructor(private http: HttpClient) {
        super()
     }

    public getExamenes():Observable<any> {
        return this.http
            .get(`${this.apiServerUrl}`).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public getExamen(id: any):Observable<any> {
        return this.http
            .get(this.apiServerUrl+"/"+id).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public addExamen(examen: Examen): Observable<Examen> {
        return this.http.post<Examen>(`${this.apiServerUrl}`, examen).pipe(catchError(err => this.errorHandler(err,'registrar')),);
    }

    public updatePatient(examen: Examen): Observable<Examen> {
        return this.http.put<Examen>(`${this.apiServerUrl}/Patient/update`, examen);
    }

    public deletePatient(examenId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/Patient/delete/${examenId}`);
    }

    public getTestToday(examenId: number): Observable<any>{
        return this.http.get<any>(`${this.apiServerUrl}/today/${examenId}`);
    }
    
    public getUpcomingTest(id:any,page:any):Observable<any> {
        return this.http
            .get(this.apiServerUrl+'/filter/upcoming/'+id+'?page='+page).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public getRecordTest(id:any,page:any):Observable<any> {
        return this.http
            .get(this.apiServerUrl+'/filter/records/'+id+'?page='+page).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public getUpcomingTests(id:any, page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/upcoming/'+id+'?page='+page).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }
    public getRecordTests(id:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/records/'+id+'?page='+page).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public filterTestsDate(id:any,start:any,end:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/date/patient/'+id+'/'+start+'/'+end+'?page='+page).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }
    public filterTestsDateTipo(id:any,start:any,end:any,tipo:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/date/patient/tipo/'+id+'/'+start+'/'+end+'/'+tipo+'?page='+page).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public filterTestsTipoUpcoming(id:any,tipo:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/upcoming/patient/tipo/'+id+'/'+tipo+'?page='+page).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public filterTestsTipoRecord(id:any,tipo:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/record/patient/tipo/'+id+'/'+tipo+'?page='+page).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public countUpcomingTests(id:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/upcoming/'+id).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }
    public countRecordTests(id:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/records/'+id).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public countfilterTestsDate(id:any,start:any,end:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/date/patient/'+id+'/'+start+'/'+end).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }
    public countfilterTestsDateTipo(id:any,start:any,end:any,tipo:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/date/patient/tipo/'+id+'/'+start+'/'+end+'/'+tipo).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public countfilterTestsTipoUpcoming(id:any,tipo:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/upcoming/patient/tipo/'+id+'/'+tipo).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public countfilterTestsTipoRecord(id:any,tipo:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/record/patient/tipo/'+id+'/'+tipo).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public getTodayTipoAppoiment(TipoId: number): Observable<any>{        
        return this.http.get<any>(`${this.apiServerUrl}/today/${TipoId}`);
    }    
    public getDaysWithMoreTest(id:any): Observable<any>{
        return this.http.get<any>(`${this.apiServerUrl}/moreTest/${id}`);
    }
}