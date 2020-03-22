import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { heroes } from "./../mock-heroes";
import { Hero } from "./../hero";
import { AuthGuardService } from '../authguard.service';

@Component({
    selector:"app-details",
    templateUrl:'./app.details.html'
})
export class DetailsComponent{
hero:Hero = heroes[0];
constructor(private routerSnap: ActivatedRoute, private authServ:AuthGuardService){

}
ngOnInit(){
    console.log("snapshot", this.routerSnap.snapshot.params.id);
    this.routerSnap.params.subscribe((par)=>{
        console.log((heroes.filter((el)=> (el.id== par.id)))[0]);
        this.hero  = (heroes.filter((el)=> (el.id== par.id)))[0];
    })
    this.authServ.setDetailsActivation(false);
    
}

}