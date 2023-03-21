import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MypostserviceService {
  private tokenKey: string = 'access-token';
  access: any;
  constructor(private http: HttpClient, private router: Router) { }

  req = 'http://localhost:9020/data'
  url = 'https://sandbox.lemmatechnologies.com/lemma-sso/api/v1/login'
  model = '{"email":"seema@lemmatechnologies.com","password":"Seema@123"}'
  org_body = ' {"is_publisher":1}'
  org_Url = 'https://sandbox.lemmatechnologies.com/lemma-sso/api/v1/organizationlist'


  Header1 = {
    Authorization: '163f79956e3311a6e9e523a0b786900db6fed33b108f186ee799ec98fccbc35127923cef2c05bd28b43141361419c5a59b599d950cbb878869fc33d3381a57940b7be6f9b44b143230ad636d7a07671fa8c250cef0bb6464aa183715f6a7e1eb0e3c2ba0480700783aa246dec7826b53b4dc54360c92da44f54aa38063b38e27415738209b757fd22cba82c33269635357825f163caf526ed5f13e8f6d5959f0dc7b8a052965e38f063d2b47fbadf35c9e346759d056602cca818168c221f512726d4dfdc514588b05e6981edb1e305c78fcd2d6f9e276cbe5dfdf24b241609e1bdab21ccbbfde35893f9f4ecc1c4037d7e0ede524b08218bccec031048385ffa0856800'
  }

  GetBackendData(): any //method for get all data from backend
  {
    return this.http.get('http://localhost:9020/data')
  }

  loginmethod(data: any) {
    var res = this.http.post<any>(this.url, this.model, { 'headers': new HttpHeaders({ 'Content-Type': 'application/json' }), 'responseType': 'json', observe: 'response' });
    // console.log("red", res);
    console.log("userdata-->>",);
    return res;
  }

  temp?: any;
  mytoken?: any;
  getaccess_token(): any {
    this.mytoken = localStorage.getItem('Mytoken')
    console.log("Token=>>", this.mytoken)
    return this.mytoken;
  }
  getToken(data: any) {
    this.temp = data
  }
  sendToken() {
    console.log(this.temp)
    return this.temp
  }

  getorganizationData(): Observable<any> {
    var flag = this.http.post<any>(this.org_Url, this.org_body, {
      headers: this.Header1,
      params: {}
    })
    console.log(flag.subscribe(v => v))
    return flag

  }


}
