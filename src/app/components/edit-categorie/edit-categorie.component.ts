import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit {

  url
  currentResource
    constructor(private router:Router,private activatedRoute: ActivatedRoute,private myService:MyServiceService) { }
  
    ngOnInit(): void {
      this.url = atob(this.activatedRoute.snapshot.params['id'])
     this.myService.getOneResource(this.url).subscribe(data=>{
       console.log(this.url,"888888888888888888888888888888")
       this.currentResource = data;
       console.log(this.currentResource)
     },err=>{
       console.log(err)
     })
     console.log(this.url);
   }
   onUpdateAxe(value: any){
     this.myService.updateResource(this.url,value).subscribe(data=>{
       alert("Mise a jour effectuée avec succès")
     },err=>{
       
     })
   }
   gotoList(){
     this.router.navigateByUrl('iftar/categories');
   }
  

}
