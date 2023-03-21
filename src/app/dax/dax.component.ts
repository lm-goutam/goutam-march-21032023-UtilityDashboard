import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { VformService } from './vform.service';
import { viooh } from './viooh';
@Component({
  selector: 'app-vform',
  templateUrl: './dax.component.html',
  styleUrls: ['./dax.component.css'],
  providers:[VformService]
})
export class DaxComponent implements OnInit{
  UserForm:FormGroup;
  PostData:any;
  Country: any=[];
  id: any = [];
  constructor(private http:HttpClient, private service: VformService){
  this.UserForm = new FormGroup({
  clickThroughUrl: new FormControl(null,Validators.required),
  region : new FormControl(null,Validators.required),
  buyer: new FormControl(null,[Validators.required,Validators.pattern('[1-9 ]*')]),
  accountId: new FormControl(null,[Validators.required,Validators.pattern('[1-9 ]*')]),
  VideoURL: new FormControl(null,[Validators.required,Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
  width: new FormControl(null,[Validators.required,Validators.pattern('[0-9 ]*')]),
  height: new FormControl(null,[Validators.required,Validators.pattern('[0-9 ]*')]),
  advertiserName: new FormControl(null,[Validators.required]),
});
}
  get buyer():AbstractControl{
    return this.UserForm.get('buyer')!;
  }
  get accountId():AbstractControl{
    return this.UserForm.get('AaccountId')!;
  }
  // get region():AbstractControl{
  //   return this.UserForm.get('region')
  // }
  get VideoURL():AbstractControl{
    return this.UserForm.get('Vurl')!;
  }
  get width():AbstractControl{
    return this.UserForm.get('width')!;
  }
  get height():AbstractControl{
    return this.UserForm.get('height')!;
  }
  get advertiserName():AbstractControl{
    return this.UserForm.get('advertiserName')!;
  }
  ngOnInit(){
    this.Country = this.service.Country();
    console.log(this.Country);
  }
  onSelect(Country: any){
    this.id = this.service.Accountid().filter(e=> e.id == Country.target.value);
    console.log(this.id)
   }
  Usermodel = new viooh(['https://lemmatechnologies.com'],'https://media.lemmatechnologies.com/media/265/20220708142707-2160x3840_Shopping_ROW.mp4','',25,55,36,'Lemma Technologies')
  onSubmit(Usermodel:any){
      console.log(this.Usermodel)
      this.service.PostData(Usermodel).subscribe((result) => {
        console.log(result);
      });
    }
}