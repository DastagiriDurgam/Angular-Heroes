import { Component } from "@angular/core";
import { heroes } from "./../mock-heroes";

@Component({
    selector: 'app-dashboard',
    templateUrl:'./app.dashboard.html',
    styleUrls: ['./app.dashboard.css']
})
export class DashboardComponent{
// heroes:any = heroes.slice(0, 4);
heroes:any = heroes;
}