import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-edit-annexe',
  templateUrl: './edit-annexe.component.html',
  styleUrls: ['./edit-annexe.component.css']
})
export class EditAnnexeComponent implements OnInit {
districts
district
currentDistrict
selectedDistrict
  url
  currentResource
    constructor(private router:Router,private activatedRoute: ActivatedRoute,private myService:MyServiceService) { }
 
    getReources(){
      this.myService.getResourceAll('districts').subscribe(data=>{
        this.districts = data['_embedded'].districts
        console.log(this.districts)
    
    })
    }
    ngOnInit(): void {

      this.getReources()
      this.url = this.myService.host+'/annexes/'+this.activatedRoute.snapshot.params['id']
 
     this.myService.getOneResource(this.url).subscribe(data=>{
       console.log(this.url,"888888888888888888888888888888")
       this.currentResource = data;
        this.getId(this.currentResource._links.district.href)
       console.log(this.currentResource,",,,,,,,,,,,,,,,,,,")
     },err=>{
       console.log(err)
     })

   }
   getId(url){
    console.log(url,"eiiiiii")
    // let u = url.slice(0,-9)
    console.log(url,'11111111111111&')
    this.myService.getOneResource(url).subscribe(data=>{
    this.district = data.id
     console.log(this.district,"kekekek")
    })

 
 
  }
  onRowClick(e){
    this.selectedDistrict = e
    console.log(e,"zzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
}
   onUpdateResource(value: any){
    console.log(value.district,"aaaaaaaaaaaaaaaaaaaaaa")
    if(this.selectedDistrict){
      value.district = `${this.myService.host}/districts/${this.selectedDistrict}`
    }else{
      value.district = `${this.myService.host}/districts/${this.district}`
    }
console.log(value.district,"vvvvvvvvvvvvvvvvvvvvvvvv")
     this.myService.updateResource(this.url,value).subscribe(data=>{
       alert("Mise a jour effectuée avec succès")
     },err=>{
       console.log(err,"errrrrrrrrrrrrrrrrrrrrrrrrrrrr")
     })
   }
   gotoList(){
     this.router.navigateByUrl('iftar/annexes');
   }

}
