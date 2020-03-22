import { Routes, RouterModule, Router } from "@angular/router";
import { DashboardComponent } from "./dashboard/app.dashboard";
import { HeroesComponent } from "./heroes/app.heroes";
import { NgModule } from "@angular/core";
import { DetailsComponent } from './details/app.details';
import { AuthGuardService } from "./authguard.service";


const routes: Routes = [
    {
        path: '', redirectTo: '/dashboard', pathMatch:'full'
    },
    {
        path:'dashboard', component:DashboardComponent
    },
    {
        path:'heroes', component:HeroesComponent
    },
    {
        path:'details/:id', component:DetailsComponent, canActivate:[AuthGuardService]
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoute{

}