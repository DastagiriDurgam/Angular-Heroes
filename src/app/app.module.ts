import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/app.dashboard";
import { HeroesComponent } from "./heroes/app.heroes";
import { DetailsComponent } from "./details/app.details";
import { AppRoute } from "./app.router.module";
import { HilightHeroDirective } from './directives/hilightHeroDirective';

@NgModule({
  declarations:[
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    DetailsComponent,
    HilightHeroDirective
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