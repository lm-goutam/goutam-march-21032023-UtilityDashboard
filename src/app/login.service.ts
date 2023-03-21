
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TableViewComponent } from './table-view/table-view.component';
@Injectable({
  providedIn: 'root'
})
export class MyService {
  url = 'https://sandbox.lemmatechnologies.com/lemma-sso/api/v1/login';
  model = '{"email":"pratiksha@lemmatechnologies.com","password":"Pratiksha@123"}';
  uploadUrl = 'https://sandbox.lemmatechnologies.com/lemma/api/v1/adunitcreate';
  Header1 = {
    Authorization: '163f79956e3311a6e9e523a0b786900db6fed33b108f186ee799ec98fccbc35127923cef2c05bd28b43141361419c5a59b599d950cbb878869fc33d3381a57940b7be6f9b44b143230ad636d7a07671fa8c250cef0bb6464aa183715f6a7e1eb0e3c2ba0480700783aa246dec7826b53b4dc54360c92da44f54aa38063b38e27415738209b757fd22cba82c33269635357825f163caf526ed5f13e8f6d5959f0dc7b8a052965e38f063d2b47fbadf35c9e346759d056602cca818168c221f512726d4dfdc514588b05e6981edb1e305c78fcd2d6f9e276cbe5dfdf24b241609e1bdab21ccbbfde35893f9f4ecc1c4037d7e0ede524b08218bccec031048385ffa0856800'
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