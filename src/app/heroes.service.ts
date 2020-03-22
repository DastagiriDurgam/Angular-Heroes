import { Hero } from "./hero";
import { heroes } from "./mock-heroes";

export class HeroService {


    getHeroes = ()=>{
        return heroes;
    }

    addHero = (hero: Hero) => {
        heroes.push(hero);
    }

    deleteHero = (hero: Hero) => {
        heroes.splice(heroes.indexOf(hero), 1);
    }

    updateHero = (newhero: Hero) => {
        heroes.map((item: Hero, idx) => { 
            if(newhero.id = item.id){
                heroes[idx] = newhero;
            }
        });

    }

    getNewID = ()=>{
        let maxID = 0;
        for (const hero of heroes) {
            if(hero.id > maxID){
                maxID = hero.id
            }
        }
        return maxID+1;
    }

}