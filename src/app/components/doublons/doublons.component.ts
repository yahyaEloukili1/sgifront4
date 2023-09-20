import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-doublons',
  templateUrl: './doublons.component.html',
  styleUrls: ['./doublons.component.css']
})
export class DoublonsComponent implements OnInit {

  benificiaires
  constructor(private rnpService: MyServiceService,private router: Router) { }

  ngOnInit(): void {
   this.getReources()

}
isLastRowOfGroup(index: number) {
  const currentCin = this.benificiaires[index].cin.toLowerCase();
  const nextCin = this.benificiaires[index + 1]?.cin.toLowerCase();
  return currentCin !== nextCin;
}

oupload(){
  this.rnpService.uploadFile2('pdf')
  
}
getReources(){
  this.rnpService.getAllBenificiairesGroupedByCin('doublons').subscribe(data=>{
     this.benificiaires = data[0]
    console.log(data,"zzaza")
    console.log(this.benificiaires)

})
}
addResource(){
    this.router.navigateByUrl("iftar/addBenificiare")

}
onDeleteResource(url:string){
  if(confirm('Etes vous sur de vouloir supprimer cette Axe ?')){
  this.rnpService.deleteResource('benificiaires',url).subscribe(data=>{
 this.getReources()
  },err=>{
    console.log(err)
  })
  }
   
 
}
onEditResource(p:any){
 
  let url = p['_links'].self.href;
  this.router.navigateByUrl("iftar/editBenificiaire/"+btoa(url))
} 

}
