import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-annexes',
  templateUrl: './annexes.component.html',
  styleUrls: ['./annexes.component.css']
})
export class AnnexesComponent implements OnInit {

  annexes
  constructor(private rnpService: MyServiceService,private router: Router) { }

  ngOnInit(): void {
   this.getReources()

}
getReources(){
  this.rnpService.getResourceAll('annexes').subscribe(data=>{
    this.annexes = data['_embedded'].annexes
    console.log(this.annexes)

})
}
addResource(){
    this.router.navigateByUrl("iftar/addAnnexe")

}
onDeleteResource(id){
  if(confirm('Etes vous sur de vouloir supprimer cette resource ?')){
  this.rnpService.deleteResourceById(this.rnpService.host+'/annexes/'+id).subscribe(data=>{
 this.getReources()
  },err=>{
    console.log(err)
  })
  }
   
 
}
onEditResource(id:any){
 

  this.router.navigateByUrl("iftar/editAnnexe/"+id)
} 
}
