import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MyServiceService } from "./services/my-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private pdi: MyServiceService,private router: Router){}
  canActivate(){
    if(this.pdi.loggedIn()){
      return true
    }
    else{
      this.router.navigateByUrl('iftar/login')
      return false
    }
  }
}
