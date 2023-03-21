import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import CreavtiveData from './creative.json'
import { demotable } from '../demotable';
import { MypostserviceService } from '../services/mypostservice.service';


declare module "*.json" {

}
interface creative {
 id: number;
 name: string;

}
@Component({
  selector: 'app-demotable',
  templateUrl: './demotable.component.html',
  styleUrls: ['./demotable.component.css']
})

export class DemotableComponent implements OnInit {

  LineItemId:Number;
  Campaigns:Number;


  publisherlist: any = [];
  groupdisplaylist: any = [];
  Backend_data: any[] = [];
  adunit: any = [];
  Ad_unit: any[];
  Display_Group: any[] = []
  selectedpublisher: any;
 
  Selectedorg: any =
    {
      Org_Id: 0, Name: ''
    };

  selectedgroup: any =
    {
      Id: 0, Name: ''
    }

 userModle = new demotable('', '', '', '', 10, 10, 10, 10, 10, 10, 10, 10,)
  name = 'Angular';
  create: creative[] = CreavtiveData; // store the creative Data 
  count: number[] = [];
  userForm!: FormGroup;
  submitted = false;
  listData: any;
  

 constructor(private fb: FormBuilder, private service: MypostserviceService) {
    this.listData = [{
      Publisher: [''], // array of publisherdropdown
      Groupdisplay: [''],  // array ofGroupDisplayDropdown
      AdUnit: [''], //array of AddUnit Dropdown
      Creative: [''],  // array of Creative Dropdown
      startDate: [''],
      Enddate: [''],
      LineItemId: [''],
      Campaigns: [''],
      impression: [''],
      Duration: [''],
      RangeDifference: [''],
      AdType: [''],
      dspID: [''],
      AdFee: [''],
    }];
    this.userForm = this.fb.group({
      Publisher: ['', Validators.required], //publisherDropdown
      Groupdisplay: ['', Validators.required], //GroupDisplayDropdown
      AdUnit: ['', Validators.required],  //AddUnitDropdown
      Creative: ['', Validators.required],  //CreativeDropdown
      startDate: ['', Validators.required],
      Enddate: ['', Validators.required],
      LineItemId: ['', [Validators.required]],
      Campaigns: ['', Validators.required],
      Impression: ['', Validators.required],
      Duration: ['', Validators.required],
      RangeDifference: ['', Validators.required],
      AdType: ['', Validators.required],
      dspID: ['', Validators.required],
      AdFee: ['', Validators.required],

    })
  }
  
  public addItem() {            //function for the add table row
    this.count.push(this.count.length + 1);
    return;
  }
    remove(id: any) {
    if (id == 1) {
      return;
    }
    this.count.pop();

  }

  keypressNo(event: any) {
    var charcode = (event.which) ? event.which : event.keycode;
    //only Numbers 0-9
    if ((charcode < 48 || charcode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }

  }
  resetform() {   //function for the reset the value of input fields after save the info
    this.userForm.reset();
  }

  OnselectCreative(e: any) {
    console.log(e);

  }
  Onsubmit(data: any): void // save function for the save the data of form into console.
  {
    var that = this;
    let _result

    if (this.submitted = true) {
      if (this.userForm.invalid) {
        return;
      }

      else {


        data['startDate'] = (data['startDate'].toISOString()) //here update date format
        data['Enddate'] = (data['Enddate'].toISOString())

        var Firstdate = new Date(data['startDate']);
        var dateFormat1 = Firstdate.getFullYear() 
        + "-" + (Firstdate.getMonth() + 1) + "-" + Firstdate.getDate()
        console.log(dateFormat1);
        data['startDate'] = dateFormat1;

        var Secondate = new Date(data['Enddate'])
        var dateFormat2 = Secondate.getFullYear()
         + "-" + (Secondate.getMonth() + 1) + "-" + Secondate.getDate()
        console.log(dateFormat2)
        data['Enddate'] = dateFormat2;
        console.log(data);
        that.resetform();
        that.submitted = false;
        
        

        alert("Your Data Submitted Successfully!!!");  //alert messege pop up
     //  var obj={}  //for take object into array
     //  obj=[data];
     //  console.log(obj)
        

   //    this.service.postData(data.value).subscribe((result) => {
  //       console.log(result);
   //    })
      }
    }
    else {
      console.warn("error");
    }

  }
  

  getOrgdata()
  {
    this.service.getorganizationData()
  }

  ngOnInit() {
    this.resetform();
    this.addItem();
    this.GetBackendData();
    }
GetBackendData() {
    this.service.GetBackendData().subscribe(
      (data: any) => {

        this.Backend_data = data;
        console.log(this.Backend_data) //Here just console backend data
        var obj = this.Backend_data
        obj.map(elt => console.log(elt))
        obj.map(elt => {
          elt.Display_Group.map((e: any) => console.log(e)
          )

        })
        obj.map((e: any) => {
          e.Display_Group.map((g: any) => console.log(this.Display_Group = g.Display_Name))
        })
        // obj.map(elt => {
        //  elt.Display_Group.map((e: { Ad_unit: any[]; }) => {
        //     e.Ad_unit.map(f => console.log(f.Ad_Name))
        //    })
        // })

      }
    );
  }
OnSelectPublisher(event: any) {
    console.log(event.target.value);
    var pId = event.target.value;
    this.groupdisplaylist = [];

    this.Backend_data.map(elt => {
      if (elt.Org_id == pId) {
        this.groupdisplaylist = elt.Display_Group;
      }

    })
    console.log(this.groupdisplaylist)
  }

  OnSelectGroup(event: any) {
    console.log(event.target.value);
    var gId = event.target.value;
    this.adunit = [];
    var groupDetails: any = []

    this.Backend_data.map(elt => {
      console.log(this.Selectedorg.Id)
      if (elt.Org_id == this.Selectedorg.Id) {
        groupDetails = elt.Display_Group;
      }
    })
    groupDetails.map((e: any) => {
      if (e.Group_Id == gId) {
        this.adunit = e.ad_unit;

      }
    })
    console.log(this.groupdisplaylist)
  }
}
