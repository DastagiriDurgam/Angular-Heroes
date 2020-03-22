import { Component } from "@angular/core";
import { heroes } from "./../mock-heroes";
import { Hero } from "./../hero";
import { HeroService } from "./../heroes.service";

@Component({
    selector: "app-heroes",
    templateUrl: "./app.heroes.html",
    providers: [HeroService]
})
export class HeroesComponent {

    constructor(private heroService: HeroService) {

    }

    allHeroes: Hero[] = heroes;
    addHero(hero) {
        if(!!hero.name && !!hero.img){
            this.heroService.addHero({
                id: this.heroService.getNewID(),
                name: hero.name,
                img: hero.img
            });
        }else{
            alert("please enter Name and image url")
        }
        
    }
    deleteHero(hero: Hero) {
        this.heroService.deleteHero(hero);
    }
    ngOnInit() {

    }

}