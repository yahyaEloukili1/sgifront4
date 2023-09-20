import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-fiches',
  templateUrl: './fiches.component.html',
  styleUrls: ['./fiches.component.css']
})
export class FichesComponent implements OnInit {

 
  fiches
  constructor(private rnpService: MyServiceService,private router: Router) { }

  ngOnInit(): void {
   this.getReources()

}
getReources(){
  this.rnpService.getResourceAll('fiches').subscribe(data=>{
    this.fiches = data['_embedded'].fiches
    console.log(this.fiches)

})
}
addResource(){
    this.router.navigateByUrl("iftar/addFiche")

}
onDeleteResource(url:string){
  if(confirm('Etes vous sur de vouloir supprimer cette Catégorie ?')){
  this.rnpService.deleteResource('fiches',url).subscribe(data=>{
 this.getReources()
  },err=>{
    console.log(err)
  })
  }
   
 
}
onEditResource(p:any){
 
  let url = p['_links'].self.href;
  this.router.navigateByUrl("iftar/editFiche/"+btoa(url))
} 

}
