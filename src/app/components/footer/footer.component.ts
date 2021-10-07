import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

const x = 3;

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent {

	get getStatus(){
		return this.wsService.socketStatus;
	}

	constructor(public wsService: WebsocketService) { }

}
