import { Component, EventEmitter, Output } from "@angular/core";
import { heroes } from "./../mock-heroes";
import { Hero } from '../hero';

@Component({
    selector: 'app-dashboard',
    templateUrl: './app.dashboard.html',
    styleUrls: ['./app.dashboard.css']
})
export class DashboardComponent {
    @Output() selectedHero = new EventEmitter<Hero>();
    // heroes:any = heroes.slice(0, 4);
    heroes: any = heroes;

    onSelectHero(hero: Hero) {
        this.selectedHero.emit(hero);
        console.log('dashComp', hero);
    }

}