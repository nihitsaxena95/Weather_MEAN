import { Component, Input } from '@angular/core';
import { ServiceMain } from './../../service/app.service';

@Component({
	selector : 'searchresult',
	templateUrl : './searchresult.html'
})

export class SearchResult {
	@Input() weatherData:any;
	constructor(private service:ServiceMain) {}
	flag:boolean=false;

	setFav(weather:any,data:any) {
	let favmain:any = {};
	favmain.city = weather.location.name;
	favmain.country = weather.location.country;
	favmain.date = data.date;
	favmain.maximum = data.day.maxtemp_c;
	favmain.minimum = data.day.mintemp_c;
	favmain.description = data.day.condition.text;
	favmain.icon = data.day.condition.icon;

	this.service.setFavData(favmain)
	.subscribe((data)=> {
		if(data.message == "success") {
			this.flag=true;
		}
	})
}
}