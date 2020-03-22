import { Component, Input } from "@angular/core";
import { Hero } from "./../hero";

@Component({
    selector:"app-details",
    templateUrl:'./app.details.html'
})
export class DetailsComponent{
@Input() hero:Hero;
selectedHero ;

ngOnInit(){
    this.selectedHero = this.hero;
}

}