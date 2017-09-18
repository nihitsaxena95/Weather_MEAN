import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector : 'searchresultlist',
	templateUrl : './searchresultlist.html'
})

export class SearchResultList {
@Input() item:any;
@Input() flag:boolean;
@Output() setitem = new EventEmitter();

setFav(data:any) {
	this.setitem.emit(data);
}
}

