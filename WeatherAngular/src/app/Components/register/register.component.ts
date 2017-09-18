import { Component } from '@angular/core';
import {ServiceMain} from './../../service/app.service';

@Component({
	selector : 'register',
	templateUrl : './register.html',
})

export class Register {
	data:any = {};
	mess:any = {};
	constructor(private service:ServiceMain){}
	register() {
		if(!this.data.username || !this.data.email || !this.data.password || !this.data.phone) {
			this.mess.message = "All Feilds are Compulsory";
		} else {
		this.service.register(this.data)
		.subscribe((data) => this.mess = data);
		}
	}

}