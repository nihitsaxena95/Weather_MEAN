import { Component, Output, EventEmitter } from '@angular/core';
import { ServiceMain } from './../../service/app.service';

@Component({
	selector : 'searchcity',
	templateUrl : './searchcity.html'
})

export class SearchCity {
	@Output() weatherOut = new EventEmitter();
constructor(private service:ServiceMain) {}
weatherData:any;
cityname:string;
mess:string;
getWeather() {
	if(!this.cityname) {
		this.mess="Feild cannot be empty";
	}
	else {
	this.service.getWeather(this.cityname)
	.subscribe((datamain:any[]) => {this.weatherOut.emit(datamain)},(err) => console.log(err));
	}
	}
}