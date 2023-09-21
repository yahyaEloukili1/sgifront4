import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, groupBy, mergeMap, toArray } from 'rxjs';
import { saveAs } from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  host= 'http://localhost:8087'
  // host ='//10.39.6.25:8088'
  jwtToken = null;
 constructor(private http: HttpClient) { }

 getResourceAll(resource: String):Observable<any[]>{
   if(this.jwtToken ==null)
   this.loadToken()
   return this.http.get<any[]>(`${this.host}/${resource}?size=10000`);
}

getResourceAll2(resource: String):Observable<any[]>{
  if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<any[]>(`${this.host}/${resource}`);
}
getResourceAll3(resource: String):Observable<any[]>{
  if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<any[]>(`${this.host}/allAAL
  `);
}
 getResource(resource: String,page:number,size:number):Observable<any[]>{ if(this.jwtToken ==null)
   this.loadToken()
     return this.http.get<any[]>(`${this.host}/${resource}?page=${page}&size=${size}`);
 }

 getLast():Observable<any[]>{ if(this.jwtToken ==null)
  this.loadToken()
    return this.http.get<any[]>(`${this.host}/getLast`);
}

 addResource(resource: string,value:any):Observable<any>{ if(this.jwtToken ==null)
   this.loadToken()
   return this.http.post<any>(`${this.host}/${resource}`,value);
}

 getResourceByKeyword(resource: String,page:number,size:number,mc:string,source:string):Observable<any[]>{ if(this.jwtToken ==null)
   this.loadToken()
   console.log(`${this.host}/${resource}/search/by${source}Page?mc=${mc}&page=${page}&size=${size}`,"aaaaaaaaaaaaaaaaaaaaa")
   return this.http.get<any[]>(`${this.host}/${resource}/search/by${source}Page?mc=${mc}&page=${page}&size=${size}`);

}

getResourceByKeywordNoPage(resource: String,size:number,mc:string,source:string):Observable<any[]>{ if(this.jwtToken ==null)
 this.loadToken()
 return this.http.get<any[]>(`${this.host}/${resource}/search/by${source}Page?mc=${mc}&size=${size}`);
}


deleteResource(resource:string,url:string){ if(this.jwtToken ==null)
 this.loadToken()
return this.http.delete(url);
}
deleteResourceById(url:string){ if(this.jwtToken ==null)
  this.loadToken()
 return this.http.delete(url);
 }
 deleteResourceById2(url:string){ if(this.jwtToken ==null)
  this.loadToken()
 return this.http.delete(url);
 }
getOneResource(url:string):Observable<any>{ if(this.jwtToken ==null)
 this.loadToken()
return this.http.get<any>(url)
}
getOneResourceById(resource:string,id:number):Observable<any>{ if(this.jwtToken ==null)
 this.loadToken()
 return this.http.get<any>(`${this.host}/${resource}/${id}`)
}




updateResource(url:string,data:any){ if(this.jwtToken ==null)
 this.loadToken()
 console.log(url)
 return this.http.patch(url,data)
}
login(user){ 
  return this.http.post(this.host+"/login",user,{observe: 'response'})
}

saveToken(jwt){
  localStorage.setItem('token',jwt);
}
loadToken(){
  this.jwtToken = localStorage.getItem('token');
  return this.jwtToken
}
downloadAll(url){
  console.log(this.host+url,"azazazzaazzzzzzzzzzzzz")
  return this.http.get(this.host+url)
}
uploadFile1(format: string) {
  const url = `${this.host}/report/${format}`;
  return this.http.get(url, {
    responseType: 'blob' // set the response type to 'blob'
  }).subscribe((blob: Blob) => {
    saveAs(blob, `report.${format}`); // download the blob as a file
  });
}
uploadFileArchive(format: string) {
  const url = `${this.host}/reportArchive/${format}`;
  return this.http.get(url, {
    responseType: 'blob' // set the response type to 'blob'
  }).subscribe((blob: Blob) => {
    saveAs(blob, `report.${format}`); // download the blob as a file
  });
}
uploadFile2(format: string) {
  const url = `${this.host}/report2/${format}`;
  return this.http.get(url, {
    responseType: 'blob' // set the response type to 'blob'
  }).subscribe((blob: Blob) => {
    saveAs(blob, `report.${format}`); // download the blob as a file
  });
}
getAllBenificiairesGroupedByCin(resource): Observable<any> {
  return this.http.get(`${this.host}/${resource}`).pipe(
    groupBy((b: any) => b.cin),
    mergeMap(group => group.pipe(toArray()))
  );
}


// uploadFile1(){
//   return this.http.get(this.host+'/report/pdf/')
// }




logout(){
  this.jwtToken = null
  localStorage.removeItem('token')

}
loggedIn(){
  return !!localStorage.getItem('token')
}

}
