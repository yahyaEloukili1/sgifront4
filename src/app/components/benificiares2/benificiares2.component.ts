import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';
declare var google: any;

@Component({
  selector: 'app-benificiares2',
  templateUrl: './benificiares2.component.html',
  styleUrls: ['./benificiares2.component.css']
})
export class Benificiares2Component implements OnInit {
  designation
selectedAnnexe =0
annexes
categories
districts
  benificiaires
  selectedCategorie =0
  selectedDistrict=0
  constructor(private rnpService: MyServiceService,private router: Router) { }

  ngOnInit(): void {
   this.getReources()
   this.getAnnexes()
   this.getCategories()
   this.getDistricts()
   this.initializeMap();

}
oupload(){
  this.rnpService.uploadFileArchive('pdf')
  
}
getAnnexes(){
  this.rnpService.getResourceAll('annexes').subscribe(data=>{
    this.annexes = data['_embedded'].annexes
  

})
}
getCategories(){
  this.rnpService.getResourceAll('categories').subscribe(data=>{
    this.categories = data['_embedded'].categories
    console.log(this.categories,"78787")
  

})
}
getDistricts(){
  this.rnpService.getResourceAll('districts').subscribe(data=>{
    this.districts = data['_embedded'].districts
    console.log(this.districts,"78787")
  

})
}
onRowClickAnnexe(e){
  this.selectedAnnexe = e
  if((this.selectedCategorie==undefined || this.selectedCategorie==0) &&(this.selectedAnnexe==undefined||this.selectedAnnexe==0)){
this.onRowClickDistrict(this.selectedDistrict)
  }else if((this.selectedCategorie==undefined || this.selectedCategorie==0)&&this.selectedAnnexe){
    this.rnpService.getOneResource(this.rnpService.host+"/endroits/search/findByAnnexeId?id="+this.selectedAnnexe).subscribe(data=>{
      this.benificiaires = data['_embedded'].endroits
      this.designation=""
  
       })
  }else if(this.selectedCategorie&&(this.selectedAnnexe==undefined||this.selectedAnnexe==0)){
    this.rnpService.getOneResource(this.rnpService.host+"/endroits/search/findByCategorieId?id="+this.selectedCategorie).subscribe(data=>{
      this.benificiaires = data['_embedded'].endroits
      this.designation=""
  
       })
  }
  else{
    if (this.selectedAnnexe !== undefined && this.selectedCategorie !== undefined) {
    this.rnpService.getOneResource(this.rnpService.host+"/endroits/search/findByAnnexeAndCategorie?annexeId="+this.selectedAnnexe+"&categorieId="+this.selectedCategorie).subscribe(data=>{
      this.benificiaires = data['_embedded'].endroits
  
  console.log(this.benificiaires,"33333333")
       })
  }
}
 
}
onRowClickDistrict(e){
  this.selectedAnnexe = 0
  this.selectedCategorie = 0
this.selectedDistrict = e 
if(this.selectedDistrict!=0){
  this.rnpService.getOneResource(this.rnpService.host+"/annexes/search/findByDistrictId?id="+this.selectedDistrict).subscribe(data=>{
    this.annexes = data['_embedded'].annexes
  })
  this.rnpService.getOneResource(this.rnpService.host+"/endroits/search/findByDistrictId?id="+this.selectedDistrict).subscribe(data=>{
    this.benificiaires = data['_embedded'].endroits
    console.log("fhis")
    this.designation=""
     })
}else{
  this.getAnnexes()
  this.getReources()

}
}
onRowClickCategorie(e){
 
  this.selectedCategorie = e
  if((this.selectedCategorie==undefined || this.selectedCategorie==0) &&(this.selectedAnnexe==undefined||this.selectedAnnexe==0)){
    this.onRowClickDistrict(this.selectedDistrict)
    console.log("double 0")
  }else if((this.selectedCategorie==undefined || this.selectedCategorie==0)&&this.selectedAnnexe){
    this.rnpService.getOneResource(this.rnpService.host+"/endroits/search/findByAnnexeId?id="+this.selectedAnnexe).subscribe(data=>{
      this.benificiaires = data['_embedded'].endroits
      console.log("fhis")
      this.designation=""
       })
  }else if(this.selectedCategorie&&(this.selectedAnnexe==undefined||this.selectedAnnexe==0)){
    this.designation=""
    this.rnpService.getOneResource(this.rnpService.host+"/endroits/search/findByCategorieId?id="+this.selectedCategorie).subscribe(data=>{
      this.benificiaires = data['_embedded'].endroits
  console.log("this")
  
       })
  }
  else{
    if (this.selectedAnnexe !== undefined && this.selectedCategorie !== undefined) {
    this.rnpService.getOneResource(this.rnpService.host+"/endroits/search/findByAnnexeAndCategorie?annexeId="+this.selectedAnnexe+"&categorieId="+this.selectedCategorie).subscribe(data=>{
      this.benificiaires = data['_embedded'].endroits
  
  console.log(this.benificiaires,"33333333")
       })
  }
}
 
}
checrher(){
  
  if(this.designation){
    this.selectedAnnexe=0 
    this.selectedCategorie=0
    this.selectedDistrict = 0
  this.rnpService.getResourceAll2('endroits/search/findByDesignationIgnoreCase?designation='+this.designation).subscribe(data=>{
    console.log('endroits/search/findByDesignationIgnoreCase?designation='+this.designation)
    this.benificiaires = data['_embedded'].endroits

})
  }else{
    this.getReources()
  }
}
getReources(){
  this.rnpService.getResourceAll2('endroits2').subscribe(data=>{
    this.benificiaires = data
 

})
}
addResource(){
    this.router.navigateByUrl("iftar/addBenificiare")

}
onDeleteResource(id:string){
//   if(confirm('Etes vous sur de vouloir supprimer cette Axe ?')){
//   this.rnpService.deleteResource('benificiaires',url).subscribe(data=>{
//  this.getReources()
//   },err=>{
//     console.log(err)
//   })
//   }
if(confirm('Etes vous sur de vouloir supprimer cette resource ?')){
  this.rnpService.deleteResourceById(this.rnpService.host+'/endroits/'+id).subscribe(data=>{
this.getReources()
this.selectedAnnexe = 0
this.selectedAnnexe =0 
this.selectedCategorie =0
this.designation = ""
},err=>{
  console.log(err)
})
}
 
 
}
onEditResource(id:any){
 

  this.router.navigateByUrl("/iftar/editBenificiaire/"+id)
} 
initializeMap() {
  const mapOptions = {
    center: { lat: 12.971598, lng: 77.594566 }, // Set the initial center of the map
    zoom: 8 // Set the initial zoom level
  };
  const map = new google.maps.Map(document.getElementById('map'), mapOptions);
 

  // Loop through the 'benificiaires' and add markers
  this.rnpService.getResourceAll2('endroits2').subscribe(data=>{
   var endroits= data
   
    endroits.forEach(endroit => {
      console.log(endroit.x,"pepe")
      const marker = new google.maps.Marker({
        position: { lat: endroit.x, lng: endroit.y },
        map: map,
        title: endroit.designation
      });
    });
})

}

}
