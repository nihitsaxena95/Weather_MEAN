import { Injectable } from '@angular/core';
import { Http,Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServiceMain {
	constructor(private http:Http) {}
	
	getWeather(place:string) : Observable<any> {
		return this.http.get("http://api.apixu.com/v1/forecast.json?key=bb3e87a74a984ce1940114028170609&q="+place+"&days=10")
			.map((res:Response) => <any[]>res.json());
	}

	setFavData(data:any) : Observable<any> {
		let item1:string = localStorage.getItem('key');
		let headers = new Headers({'Authorization' : item1})
		return this.http.post("http://localhost:8080/addfav",data,{headers : headers})
		.map((res:Response) => <any[]>res.json());
	}

	getFavData() : Observable<any> {
		let item1:string = localStorage.getItem('key');
		let headers = new Headers({'Authorization' : item1})
		return this.http.get("http://localhost:8080",{headers : headers})
		.map((res:Response) => <any>res.json());
	}
	favDelete(item:any) : Observable<any> {
		let item1:string = localStorage.getItem('key');
		let headers = new Headers({'Authorization' : item1})
		return this.http.delete("http://localhost:8080/remfav/"+item.date+"/"+item.country+"/",{headers : headers})
		.map((res:Response) => <any>res.json());
	}
	updatefav(item:any) {
		let item1 = localStorage.getItem('key');
		let headers = new Headers({'AUTH_HEADER' : item1})

		return this.http.put("http://localhost:8080/update",item,{headers : headers})
		.map((res:Response) =>{ return <any>res.json()});
	}
	register(item:any) {
		return this.http.post("http://localhost:8080/register",item)
		.map((res:Response) => <any>res.json());
	}
	login(item:any) {
		return this.http.post("http://localhost:8080/login",item)
		.map((res:Response) => <any>res.json());
	}
}