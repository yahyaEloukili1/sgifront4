import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-add-annexe',
  templateUrl: './add-annexe.component.html',
  styleUrls: ['./add-annexe.component.css']
})
export class AddAnnexeComponent implements OnInit {

  ajoute = true
  districts
  constructor(private pdiService: MyServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getReources()
  }
  getReources(){
    this.pdiService.getResourceAll('districts').subscribe(data=>{
      this.districts = data['_embedded'].districts
      console.log(this.districts)
  
  })
  }
  onSaveAffectation(f:NgForm){
    this.ajoute = false
    f.value.district = `${this.pdiService.host}/districts/${f.value.district}`
    console.log(f.value.district,"jej")
 if(!f.value.designation){
  alert(' المرجو ادخال المعلومات'  )
 }
 if(f.value.district ==  `${this.pdiService.host}/districts/`){
  alert(' المرجو ادخال المعلومات'  )
 }

 else{

  this.pdiService.addResource("annexes",f.value).subscribe(data=>{
   this.ajoute =true
    f.reset()
        },err=>{
          console.log(err)
        })
 }
 
}
  gotoList(){
    this.router.navigateByUrl('iftar/annexes');
  }
  reset(f:NgForm){
f.reset()
  }

}
