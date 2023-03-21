import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MypostserviceService } from './services/mypostservice.service';


@Injectable()
export class TokenpassInterceptor implements HttpInterceptor {

  constructor(private authservice:MypostserviceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    
    
    const tokenInfo=this.authservice.sendToken()
     console.log("Interceptor-token=>>")
     console.log(tokenInfo)
    
   // request=request.clone({headers:request.headers.set(' Authorization',tokenInfo )});
    return next.handle(request);
    

  }
}
