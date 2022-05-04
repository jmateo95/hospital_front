import { Injectable } from "@angular/core";
import { HttpErrorResponse } from '@angular/common/http';
import {  throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class ExceptionHandlerApi {
  
        errorHandler(error: HttpErrorResponse, accion: String) {
        if (error.status >= 500) {
            return throwError("Error en el servidor, intente mas tarde");
        
        }else if(error.status == 0){
            return throwError("No se pudo establecer una conexion, intente mas tarde");
        }
        if (error.error != null) {
            return throwError(error.error.message);
        } else {
            return throwError("Error al "+accion+", verifique los campos e intente de nuevo");
        }


    }
}