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

    private apiServerUrl = environment.MicroCita+"/Examen";

    constructor(private http: HttpClient) {
        super()
     }

    public getExamenes():Observable<any> {
        return this.http
            .get(`${this.apiServerUrl}`).pipe();
    }

    public getExamen(id: any):Observable<any> {
        return this.http
            .get(this.apiServerUrl+"/"+id).pipe();
    }

    public addExamen(examen: Examen): Observable<Examen> {
        return this.http.post<Examen>(`${this.apiServerUrl}`, examen).pipe();
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
            .get(this.apiServerUrl+'/filter/upcoming/'+id+'?page='+page).pipe();
    }

    public getWeekTest(id:any,semana:any):Observable<any> {
        return this.http
            .get(this.apiServerUrl+'/filter/week/'+id+'/'+semana).pipe();
    }

    public getRecordTest(id:any,page:any):Observable<any> {
        return this.http
            .get(this.apiServerUrl+'/filter/records/'+id+'?page='+page).pipe();
    }

    public getUpcomingTests(id:any, page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/upcoming/'+id+'?page='+page).pipe();
    }
    public getRecordTests(id:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/records/'+id+'?page='+page).pipe();
    }

    public filterTestsDate(id:any,start:any,end:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/patient/date/'+id+'/'+start+'/'+end+'?page='+page).pipe();
    }
    public filterTestsDateTipo(id:any,start:any,end:any,tipo:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/date/patient/tipo/'+id+'/'+start+'/'+end+'/'+tipo+'?page='+page).pipe();
    }

    public filterTestsTipoUpcoming(id:any,tipo:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/upcoming/patient/tipo/'+id+'/'+tipo+'?page='+page).pipe();
    }

    public filterTestsTipoRecord(id:any,tipo:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/record/patient/tipo/'+id+'/'+tipo+'?page='+page).pipe();
    }

    public countUpcomingTests(id:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/upcoming/'+id).pipe();
    }
    public countRecordTests(id:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/records/'+id).pipe();
    }

    public countfilterTestsDate(id:any,start:any,end:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/date/patient/'+id+'/'+start+'/'+end).pipe();
    }
    public countfilterTestsDateTipo(id:any,start:any,end:any,tipo:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/date/patient/tipo/'+id+'/'+start+'/'+end+'/'+tipo).pipe();
    }

    public countfilterTestsTipoUpcoming(id:any,tipo:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/upcoming/patient/tipo/'+id+'/'+tipo).pipe();
    }

    public countfilterTestsTipoRecord(id:any,tipo:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/record/patient/tipo/'+id+'/'+tipo).pipe();
    }

    public getTodayTipoAppoiment(TipoId: number): Observable<any>{        
        return this.http.get<any>(`${this.apiServerUrl}/today/${TipoId}`);
    }    
    public getDaysWithMoreTest(id:any): Observable<any>{
        return this.http.get<any>(`${this.apiServerUrl}/moreTest/${id}`);
    }

    public getTestCosto(start:any,end:any): Observable<any>{        
        return this.http.get<any>(`${this.apiServerUrl}/testcosto/${start}/${end}`);
    }


}