import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dax, ADS, Creative } from './dax';

@Injectable({
  providedIn: 'root'
})
export class DaxService {
  httpClient: any;
  constructor(private http: HttpClient) {}
  public postdata(usermodel:any): Observable<any> {
    const header1 = {
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJhdWQiOiJ1YXV0aCIsImV4cCI6NDgyODQxMjI2OSwiaWF0IjoxNjc0ODEyMjY5LCJpc3MiOiJ1YXV0aCIsImp0aSI6InVwUWZiNTREIiwic3ViIjoiYmxlbW1hX293bCIsImtsYXNzIjoiQWNjZXNzVG9rZW4iLCJzY29wZSI6InNlcnZpY2VfaWQ9Y29uc29sZS50ZXN0LWFkcy5vdXRkb29yLnRoaXNpc2RheC5jb20ifQ.8epAuBJDLPfIYSAILpS0nagShSSvFactJ71z0porEBptqtFFfmTUHK4O4diQj_vzyBpk8Id3fZImp7tEd45Kyg'
    }
    usermodel = new dax(new ADS ('',[],new Creative((''))));
    let url = "/api/ad_management/v1/bidder/16/ads/"
    var options = {};
    //options["headers"] = header1;
    return this.http.post<any>(url, usermodel,options);
  }
  
}
