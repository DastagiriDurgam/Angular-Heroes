import { Component } from '@angular/core';
import { Hero } from './hero';
import { heroes } from "./mock-heroes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectdTab = 'dashboard'
  title = 'AngularHeroes';
  selectedHero:Hero = heroes[0];
  onHeroWasSelected(hero){
    this.selectedHero = hero;
    console.log(hero);
  }
}
