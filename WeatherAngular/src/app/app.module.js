"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./Components/AppComponent/app.component");
var searchcity_component_1 = require("./Components/searchcity/searchcity.component");
var searchresult_component_1 = require("./Components/searchresult/searchresult.component");
var searchresultlist_component_1 = require("./Components/searchresultlist/searchresultlist.component");
var navbar_component_1 = require("./Components/Navbar/navbar.component");
var searchpage_component_1 = require("./Components/SearchPage/searchpage.component");
var updatefav_component_1 = require("./Components/updatefav/updatefav.component");
var dashboard_component_1 = require("./Components/dashboard/dashboard.component");
var favouritelist_component_1 = require("./Components/Favouritelist/favouritelist.component");
var login_component_1 = require("./Components/login/login.component");
var register_component_1 = require("./Components/register/register.component");
var welcome_component_1 = require("./Components/welcome/welcome.component");
var app_service_1 = require("./service/app.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot([
                { path: "dashboard", component: dashboard_component_1.Dashboard, children: [
                        { path: "", redirectTo: 'search', pathMatch: 'full' },
                        { path: "search", component: searchpage_component_1.SearchPage },
                        { path: "favourite", component: favouritelist_component_1.FavouriteList }
                    ] },
                { path: "register", component: register_component_1.Register },
                { path: "", component: login_component_1.Login }
            ])],
        declarations: [
            app_component_1.AppComponent,
            searchcity_component_1.SearchCity,
            searchresult_component_1.SearchResult,
            searchresultlist_component_1.SearchResultList,
            navbar_component_1.Navbar,
            searchpage_component_1.SearchPage,
            favouritelist_component_1.FavouriteList,
            updatefav_component_1.Updatefav,
            dashboard_component_1.Dashboard,
            login_component_1.Login,
            register_component_1.Register,
            welcome_component_1.Welcome
        ],
        providers: [app_service_1.ServiceMain],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map