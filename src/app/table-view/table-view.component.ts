import { Component, VERSION, OnInit } from '@angular/core';
import { read, utils, writeFile } from 'xlsx';
import * as XLSX from 'xlsx';

import { FormGroup } from '@angular/forms';
import { MyService } from '../login.service';
@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent {
  movies: unknown[];
  loginData: any;
  title(_title: any) {
    throw new Error('Method not implemented.');
  }
  name = 'Angular ' + VERSION.major;
  public tableData: any;
  data:any;
  public tableTitle: any;
  public customPagination = 10;
  public recordsPerPage = 10;
  public tableRecords = [];
  public pageStartCount = 0;
  public pageEndCount = 10;
  public totalPageCount = 0;
  myFormGroup: FormGroup<any>;
  public currentPage = 0;

  constructor(private myService: MyService) {}

  callApi(data:any) {
    // console.warn(data)
    this.myService.saveUser(data).subscribe((result:any) => {
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
    var data =[{
      
        "floor": 10,
        "floor_impr": 20,
        "floor_screen": 0,
        "floor_screen_impr": 120,
        "floor_audience": 0,
        "lemma_tot_slot_dur": 10,
        "aud_foot_fall": 350,
        "ad_sizes": [
          1
        ],
        "inventory_type": [
          2
        ],
        "inventory_category": [
          34
        ],
        "timepartings": [
          {
            "day": 0,
            "hour": 11,
            "minute": 3840,
            "tot_min": 20,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 0,
            "hour": 12,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 0,
            "hour": 13,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 0,
            "hour": 14,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 0,
            "hour": 15,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 0,
            "hour": 16,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 0,
            "hour": 17,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 0,
            "hour": 18,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 0,
            "hour": 19,
            "minute": 511,
            "tot_min": 45,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 1,
            "hour": 11,
            "minute": 3840,
            "tot_min": 20,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 1,
            "hour": 12,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 1,
            "hour": 13,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 1,
            "hour": 14,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 1,
            "hour": 15,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 1,
            "hour": 16,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 1,
            "hour": 17,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 1,
            "hour": 18,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 1,
            "hour": 19,
            "minute": 511,
            "tot_min": 45,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 2,
            "hour": 11,
            "minute": 3840,
            "tot_min": 20,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 2,
            "hour": 12,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 2,
            "hour": 13,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 2,
            "hour": 14,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 2,
            "hour": 15,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 2,
            "hour": 16,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 2,
            "hour": 17,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 2,
            "hour": 18,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 2,
            "hour": 19,
            "minute": 511,
            "tot_min": 45,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 3,
            "hour": 11,
            "minute": 3840,
            "tot_min": 20,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 3,
            "hour": 12,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 3,
            "hour": 13,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 3,
            "hour": 14,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 3,
            "hour": 15,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 3,
            "hour": 16,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 3,
            "hour": 17,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 3,
            "hour": 18,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 3,
            "hour": 19,
            "minute": 511,
            "tot_min": 45,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 4,
            "hour": 11,
            "minute": 3840,
            "tot_min": 20,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 4,
            "hour": 12,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 4,
            "hour": 13,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 4,
            "hour": 14,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 4,
            "hour": 15,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 4,
            "hour": 16,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 4,
            "hour": 17,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 4,
            "hour": 18,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 4,
            "hour": 19,
            "minute": 511,
            "tot_min": 45,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 5,
            "hour": 11,
            "minute": 3840,
            "tot_min": 20,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 5,
            "hour": 12,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 5,
            "hour": 13,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 5,
            "hour": 14,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 5,
            "hour": 15,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 5,
            "hour": 16,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 5,
            "hour": 17,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 5,
            "hour": 18,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 5,
            "hour": 19,
            "minute": 511,
            "tot_min": 45,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 6,
            "hour": 11,
            "minute": 3840,
            "tot_min": 20,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 6,
            "hour": 12,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 6,
            "hour": 13,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 6,
            "hour": 14,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 6,
            "hour": 15,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 6,
            "hour": 16,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 6,
            "hour": 17,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 6,
            "hour": 18,
            "minute": 4095,
            "tot_min": 60,
            "impressions": 0,
            "audience": 0
          },
          {
            "day": 6,
            "hour": 19,
            "minute": 511,
            "tot_min": 45,
            "impressions": 0,
            "audience": 0
          }
        ],
        "geo_id": 225932,
        "zipcodes": [
          "123456"
        ],
        "resolution": "120x90",
        "name": "screen 9 sept",
        "vendor_screen_name": "screen 9 sept",
        "publisher_loop_enabled": 1,
        "platform_id": 5,
        "timezone": {
          "name": "Indian Standard Time",
          "country": "IN",
          "utcOffset": 330,
          "utcOffsetStr": "+05:30",
          "dstOffset": 330,
          "dstOffsetStr": "+05:30",
          "aliasOf": "IST"
        },
        "is_programmatic": true,
        "address_info": {
          "address": "Lemma, Baner - Pashan Link Road, Baner Gaon, Baner, Pune, Maharashtra, India",
          "landmark": "Lemma baner",
          "screen_type": "Video Wall",
          "latitude": 18.5523426,
          "longitude": 73.79409249999999,
          "slavecount": 1
        },
        "group_id": 3,
        "loop": {
          "name": "fdg",
          "type": 1,
          "creatives": [
            {
              "creative_id": 24885,
              "sequence_index": 1
            },
            {
              "creative_id": 0,
              "sequence_index": 2
            },
            {
              "creative_id": 0,
              "sequence_index": 3
            },
            {
              "creative_id": 0,
              "sequence_index": 4
            },
            {
              "creative_id": 0,
              "sequence_index": 5
            },
            {
              "creative_id": 0,
              "sequence_index": 6
            },
            {
              "creative_id": 0,
              "sequence_index": 7
            },
            {
              "creative_id": 0,
              "sequence_index": 8
            },
            {
              "creative_id": 0,
              "sequence_index": 9
            },
            {
              "creative_id": 0,
              "sequence_index": 10
            }
          ]
        },
        "screen_dsp": {
          "dsp_id": [
            3
          ]
        },
        "currency_id": null,
        "lineitems": [
          16745
        ],
        "screen_map_img": []
    }];
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
  
public uploadData($event:any) {
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
      console.log(data); 
      this.tableData = data;
      this.tableTitle = Object.keys(this.tableData[0]);
      this.tableRecords = this.tableData.slice(
        this.pageStartCount,
        this.pageEndCount
      );
      this.totalPageCount = Math.ceil(this.tableData.length / this.recordsPerPage);
      console.log("this.totalPageCount",this.totalPageCount)
    };
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }



//   handleImport($event: any) {
//     const files = $event.target.files;
//     if (files.length) {
//         const file = files[0];
//         const reader = new FileReader();
//         reader.onload = (event: any) => {
//             const wb = read(event.target.result);
//             const sheets = wb.SheetNames;

//             if (sheets.length) {
//                 const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
//                 this.movies = rows;
//             }
//         }
//         reader.readAsArrayBuffer(file);
//     }
// }

// handleExport() {
//     const headings = [[]];
//     const wb = utils.book_new();
//     const ws: any = utils.json_to_sheet([]);
//     utils.sheet_add_aoa(ws, headings);
//     utils.sheet_add_json(ws, this.tableRecords, { origin: 'A2', skipHeader: true });
//     utils.book_append_sheet(wb, ws, 'Report');
//     writeFile(wb, 'TableRecords.xlsx');
// }


}
