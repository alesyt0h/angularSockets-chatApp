import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WebsocketService } from '../services/websocket.service';

@Injectable({
    providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

    constructor(public wsService: WebsocketService,
                private router: Router){}

    canActivate() {
        if(!this.wsService.getUsuario()){
            this.router.navigateByUrl('/')
            return false;
        } else {
            return true;
        }

    }

}
