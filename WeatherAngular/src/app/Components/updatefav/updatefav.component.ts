import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ServiceMain } from './../../service/app.service';
@Component({
	selector : 'updatefav',
	templateUrl : './updatefav.html'
})

export class Updatefav {
	@Input() weatherdata:any;
	@Output() updateout = new EventEmitter();
	constructor(private service:ServiceMain){}
	updatedata() {
			this.service.updatefav(this.weatherdata)
		.subscribe((data) => this.updateout.emit(data));
	}
 }