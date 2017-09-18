import { Component } from '@angular/core';
import { ServiceMain } from './../../service/app.service';

@Component({
	selector : 'searchpage',
	templateUrl : './searchpage.html'

})

export class SearchPage {
	constructor(private service:ServiceMain) {}
	weatherData:any;
	getWeather(data:any) {
		this.weatherData = data;
	}
}