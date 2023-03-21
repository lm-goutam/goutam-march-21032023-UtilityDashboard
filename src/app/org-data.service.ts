import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OrgDataService {

  url= 'http://localhost:8090/';

  I_Id?:number;

  constructor(private http:HttpClient) { }


  getAllOrg(){
    return this.http.get(this.url+'organization')
  }

  getAllCms(){
    return this.http.get(this.url+'cms')
  }

  getAllStat(){
    return this.http.get(this.url+'status')
  }

  getAllApp(){
    return this.http.get(this.url+'application')
  }
  postAllIntgs(integration: any){

    return this.http.post(this.url+'integrationstatus',integration)

  }
  getAllIntgs(){
    return this.http.get(this.url+'integrationstatus')
  }
  deleteIntgsById(integrationstatusId: any){
    return this.http.delete(this.url+'integrationstatus/'+integrationstatusId)
  }
  getId(integrationstatusId?: number){
    this.I_Id=integrationstatusId;
  }
  updateIntgsById(i_id:any,integration: any){
    console.log(integration)
    return this.http.put(this.url+'integrationstatus/'+this.I_Id,integration)

  }

  getIntgsById(){
    return this.http.get(this.url+'integrationstatus/'+this.I_Id)
  }
  
}
