import { Component } from '@angular/core';
import { ServiceMain } from './../../service/app.service';
import { Router } from '@angular/router';

@Component({
	selector : 'login',
	templateUrl : './login.html',
})

export class Login {
data:any={};
mess:any={};
constructor(private service:ServiceMain,private route:Router){}
change(item:any) {
	if(item.message=="success") {
		localStorage.setItem("key",item.authorization);
		this.route.navigateByUrl('dashboard');
	}
}
login() {
	 if(!this.data.email) {
	 	this.mess.message = "Email cannot be Empty";
	 }
	 else if(!this.data.password) {
	 	this.mess.message = "Password Feild cannot be Empty";
	 }
	 else {
	this.service.login(this.data)
	.subscribe((data) => {this.mess = data;this.data={};this.change(this.mess)});
	}
}
}