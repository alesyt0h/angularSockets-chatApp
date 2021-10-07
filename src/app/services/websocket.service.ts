import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

import { Mensaje, Usuario } from '../classes/usuario';

@Injectable({
	providedIn: 'root'
})
export class WebsocketService {

	public socketStatus = false;
	public usuario!: Usuario;

	constructor(private socket: Socket) {
		this.checkStatus();
		this.cargarStorage();
	}

	checkStatus() {

		this.socket.on('connect', () => {
			console.log('Conectado al servidor');
			this.socketStatus = true;
		});

		this.socket.on('disconnect', () => {
			console.log('Desconectado del servidor');
			this.socketStatus = false;
		});

	}

	emit(evento: string, payload?: any, callback?: Function) {
		console.log('Emitiendo', evento);
		this.socket.emit(evento, payload, callback);
	}

	listen(evento: string){
		return this.socket.fromEvent<Mensaje>(evento);
	}

	loginWS(nombre: string){

		return new Promise( (resolve: any, rej) => {
			this.emit('configurar-usuario',{nombre}, (resp: any) => {
				this.usuario = new Usuario(nombre);
				this.guardarStorage();
				resolve();
			})
		})

	}

	getUsuario(){
		return this.usuario;
	}

	guardarStorage(){
		localStorage.setItem('usuario', JSON.stringify(this.usuario));
	}

	cargarStorage(){
		if(localStorage.getItem('usuario')){
			this.usuario = JSON.parse(localStorage.getItem('usuario') || '');
			this.loginWS(this.usuario.nombre);
		}
	}

}
