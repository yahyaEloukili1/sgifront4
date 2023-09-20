import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,pipe, tap } from 'rxjs';
import { MyServiceService } from "./services/my-service.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  
  constructor(private injector: Injector,private router: Router,private pdiServcie:MyServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req,"***********")
    if(req.url==`http://localhost:8087/login`){
      console.log(req,"88888888888888888888")
      return next.handle(req)
    }else{
      let pdiService = this.injector.get(MyServiceService)
      console.log(req,"88888888888888888888")
      let tokenizedRequest = req.clone({
        setHeaders: {
          Authorization: pdiService.loadToken()
        }
      })
      return next.handle(tokenizedRequest).pipe(
        tap(
          succ=>{},
          err=>{
            if(err.status===403){
              pdiService.logout()
              this.router.navigateByUrl('/iftar/login')
            }
          }
        )
      )
    }

  }
  }

