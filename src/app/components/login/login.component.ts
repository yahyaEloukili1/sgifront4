import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode = 0
  constructor(private pdiService: MyServiceService,private router: Router) { }

  ngOnInit(): void {
    console.log(this.pdiService.loadToken(),"$$$$$$$$$$$")
    if(this.pdiService.jwtToken){
      this.router.navigateByUrl("iftar/districts")
    }
  }
  onSubmit(f:NgForm){
      this.pdiService.login(f.value).subscribe(resp=>{
        let jwt = resp.headers.get('Authorization')
       this.pdiService.saveToken(jwt);
        this.router.navigateByUrl("iftar/districts")
        console.log(jwt)
        
      },err=>{
        this.mode = 1;
      })
  }

}
