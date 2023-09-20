import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-benificiares',
  templateUrl: './benificiares.component.html',
  styleUrls: ['./benificiares.component.css']
})
export class BenificiaresComponent implements OnInit {

  benificiaires
  cin
  annexes
  selectedAnnexe
  constructor(private rnpService: MyServiceService,private router: Router) { }

  ngOnInit(): void {
   this.getReources()
   this.getAnnexes()

}
getAnnexes(){
  this.rnpService.getResourceAll('annexes').subscribe(data=>{
    this.annexes = data['_embedded'].annexes
    console.log(this.annexes,"888888888888")

})
}
onRowClickAnnexe(e){
  this.selectedAnnexe = e
  if(e==0){
    this.getReources()
  }else{
    this.rnpService.getOneResource(this.rnpService.host+"/benificiaires/search/findByAnnexeId?id="+e).subscribe(data=>{
      this.benificiaires = data['_embedded'].benificiaires
  
   
  
  
       })
  }
 
}
checrher(){
  console.log(this.cin,'rrrrrrrrrrrrr')
  if(this.cin){
  this.rnpService.getResourceAll('benificiaires/search/findByCinIgnoreCase?cin='+this.cin).subscribe(data=>{
    this.benificiaires = data['_embedded'].benificiaires
    console.log(this.benificiaires,"vvvvvvvvvvv")

})
  }else{
    this.getReources()
  }
}
oupload(){
  this.rnpService.uploadFile1('pdf')
  
}
getReources(){
  this.rnpService.getResourceAll2('all').subscribe(data=>{
    this.benificiaires = data
    console.log(this.benificiaires,"xxxxxxxxxxxxxxx")

})
}
addResource(){
    this.router.navigateByUrl("iftar/addBenificiare")

}
onDeleteResource(id:string){
  if(confirm('Etes vous sur de vouloir supprimer cette resource ?')){
    this.rnpService.deleteResourceById(this.rnpService.host+'/benificiaires/'+id).subscribe(data=>{
 this.getReources()
  },err=>{
    console.log(err)
  })
  }
   
 
}
onEditResource(id:any){
 

  this.router.navigateByUrl("/iftar/editBenificiaire/"+id)
} 

}
