import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrgDataService } from '../org-data.service';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.css']
})
export class IntegrationComponent implements OnInit{
  constructor(private OrgData:OrgDataService, private router: Router) {}

  intgData: any=[];
  orgData:any=[];
  org:any=[];
  cmsData:any=[];
  cms:any=[];
  statusData:any=[];
  status:any=[];
  appData:any=[];
  app:any=[];
  app1:any=[];
  temp:any=[];


  ngOnInit(): void {
    this.OrgData.getAllIntgs().subscribe((allData)=>{
      this.intgData=allData;
      console.log(allData)
    });
    this.OrgData.getAllOrg().subscribe((allData)=>{
      this.orgData=allData;
      console.log(allData)      
      this.findOrgName()
    });
    this.OrgData.getAllCms().subscribe((allData)=>{
      this.cmsData=allData;
      console.log(allData)
      this.findCmsName()
    });
    this.OrgData.getAllStat().subscribe((allData)=>{
      this.statusData=allData;
      console.log(allData)
      this.findStatusName()
    });
    this.OrgData.getAllApp().subscribe((allData)=>{
      this.appData=allData;
      console.log(allData)
      this.findAppName()
    });
    
  }
  updateItem(integrationstatusId?:any){
    console.log("i_id=",integrationstatusId);
      this.OrgData.getId(integrationstatusId);
      this.router.navigate(['/intg-update']);      
  }
  deleteItem(intg:any){
    this.OrgData.deleteIntgsById(intg.integrationstatusId)
        .subscribe(intg => {
          console.log(intg)
        });
        window.location.href="/integration";
  }
  findOrgName(){
    for(let intga of this.intgData){
      for(let val of this.orgData){
        if(val.organizationId==intga.integrationstatusOrg)
        {
          this.org.push(val.organizationinfo);
        }
      }
    } 
    console.log(this.org);
  }
  findCmsName(){
    for(let intga of this.intgData){
      for(let val of this.cmsData){
        if(val.cmsId==intga.integrationstatusCms)
        {
          this.cms.push(val.cmsinfo);
        }
      }
    } 
    console.log(this.cms);
  }
  findStatusName(){
    for(let intga of this.intgData){
      for(let val of this.statusData){
        if(val.statusId==intga.integrationstatusStatus)
        {
          this.status.push(val.statusinfo);
        }
      }
    } 
    console.log(this.status);
  }
  findAppName(){
    for(let intga of this.intgData){
      this.temp=[]
      this.app1 = JSON.parse(intga.integrationstatusApp);
      for(var i of this.app1){
        
        for(let val of this.appData ){
          if(val.applicationId==i)
          {
            this.temp.push(val.applicationinfo); //' '.concat(val.App_name.toString(),temp.toString());
            console.log(this.temp)
          }
          
        }
      }
      this.app.push(this.temp);
    } 
    console.log(this.app);
  }
}
