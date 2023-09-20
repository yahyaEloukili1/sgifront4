import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-district',
  templateUrl: './add-district.component.html',
  styleUrls: ['./add-district.component.css']
})
export class AddDistrictComponent implements OnInit {
  ajoute = true
  constructor(private pdiService: MyServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSaveAffectation(f:NgForm){
    this.ajoute = false
 if(!f.value.designation){
  alert(' المرجو ادخال المعلومات'  )
 }

 else{

  this.pdiService.addResource("districts",f.value).subscribe(data=>{
   this.ajoute =true
    f.reset()
        },err=>{
          console.log(err)
        })
 }
 
}
  gotoList(){
    this.router.navigateByUrl('iftar/districts');
  }
  reset(f:NgForm){
f.reset()
  }

}
