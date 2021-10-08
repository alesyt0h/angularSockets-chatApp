import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
    selector: 'app-mensajes',
    templateUrl: './mensajes.component.html',
    styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit, OnDestroy {

    constructor(public wsService: WebsocketService) { }

    ngOnDestroy(): void {
        this.wsService.logoutWS();
    }

    ngOnInit(): void {

    }

    salir(){
        this.wsService.logoutWS();
    }

}
