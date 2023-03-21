import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {OrgDataService} from '../org-data.service'


@Component({
  selector: 'app-intg-update',
  templateUrl: './intg-update.component.html',
  styleUrls: ['./intg-update.component.css']
})
export class IntgUpdateComponent implements OnInit{
  [x: string]: any;
    
    constructor(private OrgData:OrgDataService, private router: Router) {}
    
    orgData: any=[];
    cmsData: any=[];
    statData: any=[];
    appData: any=[];
    intgData: any=[];
    orgName:any;
  
   ngOnInit(): void  {


      this.OrgData.getIntgsById().subscribe((allData)=>{
        this.intgData=allData;
        console.log(allData)
        console.log(this.intgData)
        if(this.intgData==undefined)
        {
          this.router.navigate(['/integration']);
        }
      });
      this.OrgData.getAllOrg().subscribe((allData)=>{
        this.orgData=allData;
        console.log(allData)     
        this.getOrg();   
      });
      this.OrgData.getAllCms().subscribe((allData)=>{
        this.cmsData=allData;
        console.log(allData)
      });
      this.OrgData.getAllStat().subscribe((allData)=>{
        this.statData=allData;
        console.log(allData)
      });
      this.OrgData.getAllApp().subscribe((allData)=>{
        this.appData=allData;
        console.log(allData)
      });
      
  
    }
    
   getOrg(){
    for(let intga of this.intgData){
      for(let val of this.orgData){
        console.log(val.organizationId);
        if(val.organizationId==intga.integrationstatusOrg)
        {
          this.orgName=(val.organizationinfo);
        }
      }
    } 
    console.log(this.orgName);
   }

    onIntgsUpdate(integration: {appUrl: string,comment: string,integrationstatusApp:string,integrationstatusCms: number,integrationstatusStatus: number}){

      var reqObj = integration;
      reqObj.integrationstatusApp = JSON.stringify(integration.integrationstatusApp);
      console.log(reqObj);
      this.OrgData.updateIntgsById(this.intgData.integrationstatusId,reqObj).subscribe((integration)=>{
        console.log(this.intgData.integrationstatusId);
      })
    }
    
    selectedOrg: any;
    selectedCms: any;
    selectedStatus: any;
    selectedApp: any;
    selectedAppUrl: any;
    selectedCom: any;
  
    selectedO(){
      console.log(this.selectedOrg);
    }
    selectedC(){
      console.log(this.selectedCms);
    }
    selectedS(){
      console.log(this.selectedStatus);
    }
    selectedA(){
      console.log(this.selectedApp);
    }
    changeA(event:any){
      console.log(event.target.value);
      this.selectedAppUrl=event.target.value;
    }
    changeC(event:any){
      console.log(event.target.value);
      this.selectedCom=event.target.value;
    }
    
    onSubmit() {
      alert('Data Updated ');
      this.router.navigate(['/integration']);      
    } 
    unSubmit() {
      alert('Invalid Input**');
    }
    itemSelected(e:any){
      console.log(e);
    }
  }
  
