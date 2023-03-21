import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MypostserviceService } from '../services/mypostservice.service';


@Component({
   selector: 'app-myloginpage',
   templateUrl: './myloginpage.component.html',
   styleUrls: ['./myloginpage.component.css']
})
export class MyloginpageComponent {
   

   loginobj: any = {
      email: '',
      password: '',
   }
  

    constructor(private service: MypostserviceService, private routes: Router) { }

   isLoggedIN:boolean = true;

   

   public  userLogin(userdata: any) {
      console.log("userdata->", userdata);
      this.service.loginmethod(this.loginobj).subscribe((result: any) => {
         console.log(result);
         this.isLoggedIN = false;
         var res=  localStorage.setItem('Mytoken', result.headers.get('access-token'))
         sessionStorage.setItem('Mytoken', result.headers.get('access-token'))
         
         var token =this.service.getaccess_token();
         this.service.getToken(token)
      
    })

      
   }
 
  
   

   

}



