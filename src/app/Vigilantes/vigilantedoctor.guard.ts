import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class VigilantedoctorGuard implements CanActivate, CanActivateChild {

  constructor(
    private usuarioService: UsuarioService,
    private router : Router
  ){
  }

  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    const rol=this.usuarioService.getRolId();
      if(!rol){
          this.router.navigate(['/login'])
      }else{
        if(rol!='2'){
          this.router.navigate(['/login'])
        }
      }
    return true;
}
  
}
