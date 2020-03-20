import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/app.dashboard";
import { HeroesComponent } from "./heroes/app.heroes";
import { AppRoute } from "./app.router.module";

@NgModule({
  declarations:[
    AppComponent,
    DashboardComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoute
  ],
  exports:[],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{

}