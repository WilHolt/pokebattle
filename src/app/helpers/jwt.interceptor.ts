import { Injectable } from "@angular/core";
import { AuthService } from '../services/auth.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor{
    constructor( private auth: AuthService){}
    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
        if(this.auth.hasToken && this.auth.hasUser){
            request = request.clone({
                setHeaders:{
                    Authorization: this.auth.getToken()
                }
            })
        }
        return next.handle(request)
    }
}