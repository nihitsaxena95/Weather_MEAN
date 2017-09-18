import { Component, OnInit } from '@angular/core';
import { ServiceMain } from './../../service/app.service';
@Component({
	selector: 'favouritelist',
	templateUrl : './favouritelist.html'
})

export class FavouriteList implements OnInit {
constructor(private service:ServiceMain) {}
favdata:any;
updatedata:any;
getData() {
	this.service.getFavData()
	.subscribe((data) =>{ this.favdata = data});
}

favDel(item:any) {
	this.service.favDelete(item)
	.subscribe((data) => this.favdata = data);
}

updatefavdata(item:any) {
	this.updatedata = item;
}

gotupdate(data :any) {
	if(data) {
		this.updatedata = undefined;
	}
}

ngOnInit() {
	this.getData();
}
}