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
var SearchResult = (function () {
    function SearchResult(service) {
        this.service = service;
        this.flag = false;
    }
    SearchResult.prototype.setFav = function (weather, data) {
        var _this = this;
        var favmain = {};
        favmain.city = weather.location.name;
        favmain.country = weather.location.country;
        favmain.date = data.date;
        favmain.maximum = data.day.maxtemp_c;
        favmain.minimum = data.day.mintemp_c;
        favmain.description = data.day.condition.text;
        favmain.icon = data.day.condition.icon;
        this.service.setFavData(favmain)
            .subscribe(function (data) {
            if (data.message == "success") {
                _this.flag = true;
            }
        });
    };
    return SearchResult;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SearchResult.prototype, "weatherData", void 0);
SearchResult = __decorate([
    core_1.Component({
        selector: 'searchresult',
        templateUrl: './searchresult.html'
    }),
    __metadata("design:paramtypes", [app_service_1.ServiceMain])
], SearchResult);
exports.SearchResult = SearchResult;
//# sourceMappingURL=searchresult.component.js.map