// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ExcxceldataService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
// import { Data } from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';
import { TokenClass } from 'typescript';
@Injectable({
  providedIn: 'root',
})
export class ExcxceldataService {
url = 'https://sandbox.lemmatechnologies.com/lemma-sso/api/v1/login';
model = '{"email":"dwarkesh@lemmatechnologies.com","password":"Dwarkesh@123"}';
uploadUrl = 'https://sandbox.lemmatechnologies.com/lemma/api/v1/setsitemap';
Header1 = {
  Authorization: '6ba94b6f46920f5c4955dbeac8cd6a61029707cc41a45c8413bcd5799c2a1014b85af6adf8458c7cf3df683a1faff1f6f35b6fe3867e223d6d23baa9994fc1dadfba41df7f900b602794106bd69ec3844c2fc8113d09441da946f6786a562875a2d34e4a38f6daee2377e06bdd131dc6d83c57fd972d7d624d3e9d5e2f31a8e90c64d1a718e9c364587dedcb77b7fb4f90ea9c104a2cf22da8ba324de6584fbed331975f5d5fd4aef371c5e0dc7eaba23c5cc2dc72fba5d679f46bd0783350f17fb88ce5b6216f21ad4576cdab9557e5692a93b16e8a8b820c316b82f68265f0713febb0218826dc20657c3341b6b72683f038ded8986ddec880f3db7e100c36'
}
  data: any;
  constructor(private http: HttpClient) { }
   saveUser(data:any):Observable<any> {
    var res =  this.http.post(this.url, this.model,{'headers' : new HttpHeaders ({'Content-Type' : 'application/json'}), 'responseType': 'text', observe:'response'});
    // console.log("red", res);
    return res;
   }
  uploadUser(data:any, mytoken:any):Observable<any>{
    // var b = window.localStorage.getItem('Access-Token')
    var ress =  this.http.post<any>(this.uploadUrl, data, {
     headers: this.Header1,
     params: {}
    })
    console.log(mytoken)
      // 'headers': {'access-token' : b}
    console.log(ress.subscribe(v => v))
    return ress;
  }
}