import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {HikeModule} from "./hike/hike.module";
import {HomeModule} from "./home/home.module";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {HikeComponent} from "./hike/hike.component";
import {PageNotFoundComponent} from "./page-not-found.component";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HikeModule,
    HomeModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'hikes', component: HikeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
