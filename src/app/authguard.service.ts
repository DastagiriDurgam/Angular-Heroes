import { CanActivate } from '@angular/router';

export class AuthGuardService implements CanActivate{

    enableDetails:boolean = false;
    canActivate(){
        return this.enableDetails;
    }

    setDetailsActivation(detailsActivation:boolean){
        this.enableDetails = detailsActivation;
    }

}