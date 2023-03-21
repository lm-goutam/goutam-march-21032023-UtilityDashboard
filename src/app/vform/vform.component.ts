import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ADS, Creative, dax } from '../vform/dax';
import { DaxService } from '../vform/dax.service';


@Component({
  selector: 'app-dax',
  templateUrl: './vform.component.html',
  styleUrls: ['./vform.component.css'],
  providers: [DaxService]

})
export class VformComponent implements OnInit {
  name = 'Angular'; 
  Userform: FormGroup
  postdata: any;
 
  //validations : 
  constructor(private http:HttpClient,private service: DaxService){
    this.Userform = new FormGroup({
      iurl: new FormControl('',[Validators.required,Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
      dadid: new FormControl('',[Validators.required,Validators.pattern('[1-9 ]*')]),
      adomain: new FormControl('',[Validators.required,Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    });

  }
  get iurl(): AbstractControl{
    return this.Userform.get('iurl')!;  /* Url */
  }
  get dadid(): AbstractControl{
    return this.Userform.get('dadid')!; /* Lemma Creative Id */
  }
  get adomain():AbstractControl{
    return this.Userform.get('adomain')!; /* Ad Domain */
  }

  ngOnInit():void{
    this.callapi()
   }

/* call json through httpclient */
  callapi(){
    this.http.get('').subscribe(res=>{
      console.log(res);
    }) 
  }
 
 Usermodel = new dax(new ADS ('',[],new Creative((''))));
 onSubmit(_Usermodel: any){
     var object = {};
    // object["creative"] = this.Usermodel.ads.creative;
    // object["dadid"] = this.Usermodel.ads.dadid;
    // object["adomain"] = [this.Usermodel.ads.adomain]; 

    var req = {};
   // req["ads"] = [object];
  
    console.log(req);
    this.service.postdata(req).subscribe((Usermodel: any) =>{
    console.log(Usermodel); 
    this.Userform.reset();
    })
  }
}
