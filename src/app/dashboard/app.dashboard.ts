import { Component, EventEmitter, Output } from "@angular/core";
import { heroes } from "./../mock-heroes";
import { Hero } from '../hero';
import { Router, Route } from "@angular/router";
import { AuthGuardService } from '../authguard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './app.dashboard.html',
    styleUrls: ['./app.dashboard.css']
})
export class DashboardComponent {
    constructor(private router:Router, private authServ: AuthGuardService){

    }
    @Output() selectedHero = new EventEmitter<Hero>();
    // heroes:any = heroes.slice(0, 4);
    heroes: any = heroes;

    onSelectHero(hero: Hero) {
        this.selectedHero.emit(hero);
        // console.log('dashComp', hero);
        this.authServ.setDetailsActivation(true);
        this.router.navigate(['/details', hero.id], {queryParams:{name:hero.name}, fragment:""+hero.id})
    }

}