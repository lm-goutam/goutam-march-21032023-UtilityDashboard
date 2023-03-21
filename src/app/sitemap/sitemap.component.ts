// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-sitemap',
//   templateUrl: './sitemap.component.html',
//   styleUrls: ['./sitemap.component.css']
// })
// export class SitemapComponent {

// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { read, utils, writeFile } from 'xlsx';
import * as XLSX from 'xlsx';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {AfterViewInit, ViewChild} from '@angular/core';
import { isEmpty } from 'rxjs';
// import { checkBoxChange, isEditable, recordClick } from '@syncfusion/ej2-angular-grids';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExcxceldataService } from '../excxceldata.service';
import { Token } from '@angular/compiler';
import { __values } from 'tslib';

@Component({
selector: 'app-sitemap',
templateUrl: './sitemap.component.html',
styleUrls: ['./sitemap.component.css'],
providers: []
})

export class SitemapComponent implements OnInit {
isEdit = true;
users: any;
private newAttribute: any={name: 'AAA'};
enableEditIndex: any;
enableEdit: any;
index: number[]=[];
getNewRow: any;
data: any;
isEditable: any;
hidden: any;
excelData: any;
submitted: boolean;
myFormData: FormGroup<any>;
saveUser: FormGroup;
i: number[]=[];
userForm: any;
// callApi: any;
constructor(private userData: ExcxceldataService){
// this.userData.users().subscribe((data) => {
// this.users=data;
// });
}
callApi(data:any) { 
// console.warn(data)
this.userData.saveUser(data).subscribe((result:any) => {
console.log(result); 
localStorage.setItem('Access-Token', result.headers.get('access-token'))
sessionStorage.setItem('Access-Token', result.headers.get('access-token'))
const token = localStorage. getItem("Access-Token");
// console.log(token)
this.uploadButton(token)
// Response'("loginResponse", `localStorage set with token value: ${data.token}`'
// sessionStorage.setItem('access_token', result.token);
// localStorage.setItem('callApi', JSON.stringify({ token: result.access_token, name: __values }));
})
}

uploadButton(mytoken:any){
var data = [{
"sid": "38:2c:4a:0f:6f:6b",
"end_time": "01:00",
"aid": 14404,
"domain": "lemmadigital.com",
"is_resetup": false,
"is_screen_edit": false,
"is_adSync": true,
"is_fullscreen": false,
"is_auto_update": false,
"environment": 1,
"default_creative": "",
"refresh_interval": 3600,
"is_weather": 1,
"app_url": "https://apps.lemmatechnologies.com/sdk/html5/?",
"schedule_api": "/lemma/api/v1/getcrtvschedule",
"ad_servad_api": "/lemma/servad?",
"notification_api": "/lemma/api/v1/sch_upd_notify",
"lemma_Weather_api": "https://apps.lemmatechnologies.com/js/weather.json",
"thirdparty_Weather_api": "https://sync.lemmatechnologies.com/media/weather.json",
"default_duration": 15,
"sitemap_api": "https://lemmadigital.com/lemma/api/v1/getsitemap",
"restart_time": "",
"timezone": "+00:00",
"local_domain": "sync.lemmatechnologies.com",
"prod_domain": "lemmadigital.com",
"is_mute":1
}];
this.userData.uploadUser(data,mytoken);
}

ngOnInit(): void {
throw new Error('Method not implemented.');
}
public editRows: Array <any> = [];
public tableData: any;
public tableTitle: any;
public customPagination = 10;
public recordsPerPage = 10;
public tableRecords: Array <any> = [];
public pageStartCount = 0;
public pageEndCount = 10;
public totalPageCount : any;
public currentPage = 0;
public table: any;
public row: 1;
public count: any[] = [];

Onsubmit(i:any) {
if(this.tableRecords[i].isEditable = false){
// const add = this.userForm.controls[i].value;
// this.users[i] = add;
// console.log(add);
this.tableData[i] = this.isEditable;
this.isEditable = {};

// return [i];
} 
return[i];
}
// saveChanges(index: number) {
// const editedUser = this.userForm.controls[index].value;
// this.users[index] = editedUser;
// }
OnEdit(i: any) {
this.tableRecords[i].isEditable = true;
}

addItem(i:any) { //function for the add table row
if (this.tableData.isEdit = true) {
this.tableRecords.push(i);
// this.tableRecords[i].push(i,1);

} 
return;
}
OnDelete(i: any) {
if (i == 1) {
}
this.tableRecords.splice(i, 1);
}


onPageChange() {
this.pageStartCount = this.currentPage * this.recordsPerPage;
this.pageEndCount = this.pageStartCount + this.recordsPerPage;
this.tableRecords = this.tableData.slice(
this.pageStartCount,
this.pageEndCount
);
}
goToPage(i: any) {
this.currentPage = i;
this.onPageChange();
this.tableRecords.indexOf(this.currentPage); 
}
nextPage() {
if (this.currentPage < this.totalPageCount - 1) {
this.currentPage++;
this.onPageChange();
}
}
previousPage() {
if (this.currentPage > 0) {
this.currentPage--;
this.onPageChange();
}
}

public uploadData($event:any): void {
console.log($event.target.files[0]);
const target: DataTransfer = <DataTransfer>(<unknown>$event.target);
if (target.files.length !== 1) {
throw new Error('Cannot use multiple files');
}
const reader: FileReader = new FileReader();
reader.readAsBinaryString(target.files[0]);
reader.onload = (e: any) => {
const binarystr: string = e.target.result;
const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

const wsname: string = wb.SheetNames[0];
const ws: XLSX.WorkSheet = wb.Sheets[wsname];

const data = XLSX.utils.sheet_to_json(ws); 
// console.log(data.map((v: any) => ({isEditable: true, ...v}))); 
this.tableData = data.map((i: any) => ({isEditable: false, ...i}));
console.log(data);
// this.data[index].isEditable = true;
// this.tableData = data;
this.tableTitle = Object.keys(this.tableData[0]);
this.tableRecords = this.tableData.slice(
this.pageStartCount,
this.pageEndCount
);
this.totalPageCount = Math.ceil(this.tableData.length / this.recordsPerPage);
console.warn("this.totalPageCount",this.totalPageCount)
};
}
numSequence(n: number): Array<number> {
return Array(n);
}
// ngOnInit() {
// this.addItem(); //for default input field of data

// }

}