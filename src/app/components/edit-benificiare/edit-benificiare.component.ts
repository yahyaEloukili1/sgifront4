import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { get } from 'http';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-edit-benificiare',
  templateUrl: './edit-benificiare.component.html',
  styleUrls: ['./edit-benificiare.component.css']
})
export class EditBenificiareComponent implements OnInit {

  districts
  district
  annexe
  categorie
  annexes
  categories
  currentDistrict
  selectedDistrict
  selectedAnnexe
  selectedCategorie
    url
    currentResource
      constructor(private router:Router,private activatedRoute: ActivatedRoute,private myService:MyServiceService) { }
   
      getDistricts(){
        this.myService.getResourceAll('districts').subscribe(data=>{
          this.districts = data['_embedded'].districts
      
      })
      }
      
      getAnnexes(){
        this.myService.getResourceAll('annexes').subscribe(data=>{
          this.annexes = data['_embedded'].annexes
          console.log(this.annexes)
      
      })
      }
      getCategories(){
        this.myService.getResourceAll('categories').subscribe(data=>{
          this.categories = data['_embedded'].categories
          console.log(this.categories)
      
      })
      }
      ngOnInit(): void {
  
        this.getDistricts()
        this.getAnnexes()
        this.getCategories()
        this.url = this.myService.host+'/endroits/'+this.activatedRoute.snapshot.params['id']
        
   
       this.myService.getOneResource(this.url).subscribe(data=>{
         console.log(this.url,"888888888888888888888888888888")
         this.currentResource = data;
          this.getId(this.currentResource._links.district.href)
   this.getId2(this.currentResource._links.annexe.href.slice(0,-13))
  console.log(this.currentResource._links.annexe.href.slice(0,-13),"zzzzzzzzzzzz")
          this.getId3(this.currentResource._links.categorie.href)
        
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
    getId2(url){
      console.log(url,"eiiiiii")
      // let u = url.slice(0,-9)
      console.log(url,'11111111111111&')
      this.myService.getOneResource(url).subscribe(data=>{
      this.annexe = data.id
       console.log(this.annexe,"vrrrrrrrrrr")
      })
  
   
   
    }
    getId3(url){
      console.log(url,"eiiiiii")
      // let u = url.slice(0,-9)
      console.log(url,'11111111111111&')
      this.myService.getOneResource(url).subscribe(data=>{
      this.categorie = data.id
       console.log(this.categorie,"kekekek")
      })
  
   
   
    }
    
    onRowClick(e){
      this.selectedDistrict = e
      console.log(e,"zzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
  }
  onRowClickAnnexe(e){
    this.selectedAnnexe = e
    console.log(e,"zzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
}
onRowClicCategorie(e){
  this.selectedCategorie = e
  console.log(e,"zzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
}
onRowClicDistrict(e){
  this.selectedDistrict = e
  console.log(e,"zzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
}
     onUpdateResource(value: any){
      console.log(value.district,"aaaaaaaaaaaaaaaaaaaaaa")
      if(this.selectedDistrict){
        value.district = `${this.myService.host}/districts/${this.selectedDistrict}`
        this.myService.getOneResourceById("districts",this.selectedDistrict).subscribe(data=>{
          value.districtName = data.designation
        })
  
      }else{
        value.district = `${this.myService.host}/districts/${this.district}`
      }

      if(this.selectedAnnexe){
        value.annexe = `${this.myService.host}/annexes/${this.selectedAnnexe}`
        this.myService.getOneResourceById("annexes",this.selectedAnnexe).subscribe(data=>{
          console.log(data.designation,"777777777777777777777")
          value.annexeName = data.designation
          // this.myService.updateResource(`${this.myService.host}/annexes/${this.selectedAnnexe}`,)
        })
      }else{
        value.annexe = `${this.myService.host}/annexes/${this.annexe}`
      }


      if(this.selectedCategorie){
        value.categorie = `${this.myService.host}/categories/${this.selectedCategorie}`
        this.myService.getOneResourceById("categories",this.selectedCategorie).subscribe(data=>{
          value.categorieName = data.designation
        })
        
      }else{
        value.categorie = `${this.myService.host}/categories/${this.categorie}`
      }

       this.myService.updateResource(this.url,value).subscribe(data=>{
        console.log(data,"vvvvvvvvvvvvvvvvvvvvvvvv")
         alert("Mise a jour effectuée avec succès")
       },err=>{
         console.log(err,"errrrrrrrrrrrrrrrrrrrrrrrrrrrr")
       })
     }
     gotoList(){
       this.router.navigateByUrl('iftar/benificiaires2');
     }
  
  }
  