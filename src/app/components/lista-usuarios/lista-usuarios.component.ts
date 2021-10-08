import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../../services/chat.service';
import { WebsocketService } from '../../services/websocket.service';

@Component({
    selector: 'app-lista-usuarios',
    templateUrl: './lista-usuarios.component.html',
    styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

    usuariosActivos$!: Observable<any>;

    constructor(private chatService: ChatService) { }

    ngOnInit(): void {
        console.log('oninit')
        this.usuariosActivos$ = this.chatService.getUsuariosActivos();

        // Emitir el obtenerUsuarios
        this.chatService.emitirUsuariosActivos();
    }

}
