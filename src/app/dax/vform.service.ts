import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { viooh } from './viooh';

@Injectable({
  providedIn: 'root'
})
export class VformService {
  // url = 'https://smartexchange-content.viooh.com/api/v1/creative'
  // constructor(private http: HttpClient){}
  // PostData(data:any){
  //   return this.http.post(this.url,data)
  // }
  Country(){
     return[
      {
        id:1,
        name:"Austrelia"
      },
      {
        id:2,
        name:"United Kingdom"
      },
      {
        id:3,
        name:"United States"
      },
      {
        id:4,
        name:"Singapore"
      }
     ]
  }
  Accountid(){
    return[
      {
        id:1,
        name:"3023"
      },
      { 
        id:2,
        name:"3158"
      },
      {
        id:3,
        name :"3075"
      },
      {
        id:4,
        name:"3197"
      },

    ]
  }
  

  constructor(private http:HttpClient){}
  public PostData(Usermodel:any) :Observable<any>{
    const header ={
      'X-Smart-Exchange-Key': '72126f27110f3fcbb7912ce60d317551',

    }
    Usermodel = new viooh(['https://lemmatechnologies.com'],'https://media.lemmatechnologies.com/media/265/20220708142707-2160x3840_Shopping_ROW.mp4','',3075,5,8,'Lemma Technologies')
    let url = "https://smartexchange-content.viooh.com/api/v1/creative"
    var options = {};
    //options['headers'] = header;
    return this.http.post<any>(url,Usermodel,options);
  }
}
