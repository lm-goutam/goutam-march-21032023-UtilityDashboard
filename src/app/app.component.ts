import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from './post.service';
import { MypostserviceService } from './services/mypostservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 title = 'admin-panel-layout';
  sideBarOpen = true;
  email:string;
  password:string;

  isLogin:boolean=true;
  constructor(private post:MypostserviceService,private routes:Router){

  }
 // userLogin(data:any){
   
 //   console.log(data);
  //  this.post.loginmethod(data)
  //   console.log(data)
     
  //   this.routes.navigate(['/app'])
   
   // }
  

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit()
 {
   let currentlogin=localStorage.getItem('email')|| '{}'

   if(currentlogin!='')
   {
    this.isLogin=true;
   }
 }
  p:any;
  data:any=[];
  //getData(){
  //  this.post.getData().subscribe(
  //    (data) =>{
  //      this.data=data;
     
 //     }
 //   );
 // }
}