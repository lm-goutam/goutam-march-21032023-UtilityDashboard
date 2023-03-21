
    export class dax{  
        value:any;
        adomain:[];
        dadid:string;
        iurl: string;  
        vform: any;
          ADS: [];
        
            constructor(
               public ads: any=[]){
                    
                }
        }
        export class ADS{
        iurl: any;
        ads:ADS[];
        
            constructor( public dadid: string, public adomain:[], public creative : Creative){
            }
        } 
        export class Creative{
            constructor(public iurl: string){}
        }
        

