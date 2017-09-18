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
var FavouriteList = (function () {
    function FavouriteList(service) {
        this.service = service;
    }
    FavouriteList.prototype.getData = function () {
        var _this = this;
        this.service.getFavData()
            .subscribe(function (data) { _this.favdata = data; });
    };
    FavouriteList.prototype.favDel = function (item) {
        var _this = this;
        this.service.favDelete(item)
            .subscribe(function (data) { return _this.favdata = data; });
    };
    FavouriteList.prototype.updatefavdata = function (item) {
        this.updatedata = item;
    };
    FavouriteList.prototype.gotupdate = function (data) {
        if (data) {
            this.updatedata = undefined;
        }
    };
    FavouriteList.prototype.ngOnInit = function () {
        this.getData();
    };
    return FavouriteList;
}());
FavouriteList = __decorate([
    core_1.Component({
        selector: 'favouritelist',
        templateUrl: './favouritelist.html'
    }),
    __metadata("design:paramtypes", [app_service_1.ServiceMain])
], FavouriteList);
exports.FavouriteList = FavouriteList;
//# sourceMappingURL=favouritelist.component.js.map