import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories
  constructor(private rnpService: MyServiceService,private router: Router) { }

  ngOnInit(): void {
   this.getReources()

}
getReources(){
  this.rnpService.getResourceAll('categories').subscribe(data=>{
    this.categories = data['_embedded'].categories
    console.log(this.categories)

})
}
addResource(){
    this.router.navigateByUrl("iftar/addCategorie")

}
onDeleteResource(url:string){
  if(confirm('Etes vous sur de vouloir supprimer cette resource ?')){
  this.rnpService.deleteResource('categories',url).subscribe(data=>{
 this.getReources()
  },err=>{
    console.log(err)
  })
  }
   
 
}
onEditResource(p:any){
 
  let url = p['_links'].self.href;
  this.router.navigateByUrl("iftar/editCategorie/"+btoa(url))
} 
}
