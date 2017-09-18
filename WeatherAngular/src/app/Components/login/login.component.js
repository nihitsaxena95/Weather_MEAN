"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_service_1 = require("./../../service/app.service");
var router_1 = require("@angular/router");
var Login = (function () {
    function Login(service, route) {
        this.service = service;
        this.route = route;
        this.data = {};
        this.mess = {};
    }
    Login.prototype.change = function (item) {
        if (item.message == "success") {
            localStorage.setItem("key", item.authorization);
            this.route.navigateByUrl('dashboard');
        }
    };
    Login.prototype.login = function () {
        var _this = this;
        if (!this.data.email) {
            this.mess.message = "Email cannot be Empty";
        }
        else if (!this.data.password) {
            this.mess.message = "Password Feild cannot be Empty";
        }
        else {
            this.service.login(this.data)
                .subscribe(function (data) { _this.mess = data; _this.data = {}; _this.change(_this.mess); });
        }
    };
    return Login;
}());
Login = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './login.html',
    }),
    __metadata("design:paramtypes", [app_service_1.ServiceMain, router_1.Router])
], Login);
exports.Login = Login;
//# sourceMappingURL=login.component.js.map