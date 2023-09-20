import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-distrits',
  templateUrl: './distrits.component.html',
  styleUrls: ['./distrits.component.css']
})
export class DistritsComponent implements OnInit {
districts
  constructor(private rnpService: MyServiceService,private router: Router) { }

  ngOnInit(): void {
   this.getReources()

}
getReources(){
  this.rnpService.getResourceAll('districts').subscribe(data=>{
    this.districts = data['_embedded'].districts
    console.log(this.districts)

})
}
addResource(){
    this.router.navigateByUrl("iftar/addDistict")

}
onDeleteResource(url:string){
  if(confirm('Etes vous sur de vouloir supprimer cette resource ?')){
  this.rnpService.deleteResource('districts',url).subscribe(data=>{
 this.getReources()
  },err=>{
    console.log(err)
  })
  }
   
 
}
onEditResource(p:any){
 
  let url = p['_links'].self.href;
  this.router.navigateByUrl("iftar/editDistrict/"+btoa(url))
} 
}