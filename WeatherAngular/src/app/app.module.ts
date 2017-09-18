import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './Components/AppComponent/app.component';
import { SearchCity }  from './Components/searchcity/searchcity.component';
import { SearchResult } from './Components/searchresult/searchresult.component';
import { SearchResultList } from './Components/searchresultlist/searchresultlist.component';
import { Navbar } from './Components/Navbar/navbar.component';
import { SearchPage } from './Components/SearchPage/searchpage.component';
import { Updatefav } from './Components/updatefav/updatefav.component';
import { Dashboard } from './Components/dashboard/dashboard.component';
import { FavouriteList } from './Components/Favouritelist/favouritelist.component';
import { Login } from './Components/login/login.component';
import { Register } from './Components/register/register.component';
import { Welcome } from './Components/welcome/welcome.component';
import { ServiceMain} from './service/app.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([
  	{ path : "dashboard",component : Dashboard, children : [
  	  { path : "", redirectTo: 'search', pathMatch: 'full'},
  	  {	path : "search", component : SearchPage },
  	  {	path : "favourite", component : FavouriteList }
  	]},
  	{ path : "register", component : Register },
  	{ path : "", component : Login}
  ]) ],
  declarations: [ 
  AppComponent,
   SearchCity,
    SearchResult,
     SearchResultList, 
     Navbar,
      SearchPage,
       FavouriteList,
        Updatefav,
         Dashboard,
         Login,
         Register, 
         Welcome ],
  providers : [ServiceMain],
  bootstrap:   [ AppComponent ]
})
export class AppModule {}
