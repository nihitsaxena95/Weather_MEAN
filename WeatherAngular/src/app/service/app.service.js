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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ServiceMain = (function () {
    function ServiceMain(http) {
        this.http = http;
    }
    ServiceMain.prototype.getWeather = function (place) {
        return this.http.get("http://api.apixu.com/v1/forecast.json?key=bb3e87a74a984ce1940114028170609&q=" + place + "&days=10")
            .map(function (res) { return res.json(); });
    };
    ServiceMain.prototype.setFavData = function (data) {
        var item1 = localStorage.getItem('key');
        var headers = new http_1.Headers({ 'Authorization': item1 });
        return this.http.post("http://localhost:8080/addfav", data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ServiceMain.prototype.getFavData = function () {
        var item1 = localStorage.getItem('key');
        var headers = new http_1.Headers({ 'Authorization': item1 });
        return this.http.get("http://localhost:8080", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ServiceMain.prototype.favDelete = function (item) {
        var item1 = localStorage.getItem('key');
        var headers = new http_1.Headers({ 'Authorization': item1 });
        return this.http.delete("http://localhost:8080/remfav/" + item.date + "/" + item.country + "/", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ServiceMain.prototype.updatefav = function (item) {
        var item1 = localStorage.getItem('key');
        var headers = new http_1.Headers({ 'AUTH_HEADER': item1 });
        return this.http.put("http://localhost:8080/update", item, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ServiceMain.prototype.register = function (item) {
        return this.http.post("http://localhost:8080/register", item)
            .map(function (res) { return res.json(); });
    };
    ServiceMain.prototype.login = function (item) {
        return this.http.post("http://localhost:8080/login", item)
            .map(function (res) { return res.json(); });
    };
    return ServiceMain;
}());
ServiceMain = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ServiceMain);
exports.ServiceMain = ServiceMain;
//# sourceMappingURL=app.service.js.map