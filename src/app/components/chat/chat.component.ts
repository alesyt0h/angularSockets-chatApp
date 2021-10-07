import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from '../../services/chat.service';

interface Mensaje {
    de: string;
    cuerpo: string;
}

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

    texto = '';
    msgListener$!: Subscription;
    elemento!: HTMLElement;

    mensajes: Mensaje[] = [];

    constructor(private chatService: ChatService) { }

    ngOnDestroy(): void {
        this.msgListener$.unsubscribe()
        console.log('destroying msg listener')
    }

    ngOnInit(): void {

        this.elemento = document.querySelector('#chat-mensajes')!;

        this.msgListener$ = this.chatService.getMessages().subscribe( msg => {
            console.log(msg);
            this.mensajes.push(msg);
            setTimeout(() => {
                this.elemento.scrollTop = this.elemento.scrollHeight;
            }, 50);
        });
    }

    enviar(){
        if (this.texto.trim().length === 0) { return }

        this.chatService.sendMessage(this.texto);
        this.texto = '';
    }
}
