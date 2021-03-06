import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/login'
  constructor( private http:HttpClient) {

   }

   async login(user): Promise<any>{
      return await this.http.post(this.url,user).subscribe((result:any) => {
        console.log(result)
        const expiresAt = moment().add(result.expiresIn,'second')
        localStorage.setItem('user', result.payload.dbUser)
        localStorage.setItem('token', result.acess_token)
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) )
      })

      
   }
   logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at")
  }
  hasUser(){
    if(localStorage.getItem('user') != null){
      return true
    }
    return false
  }
  hasToken(){
    if(localStorage.getItem('token') != null){
      return true
    }
    return false
  }
  isLoggedIn() {
    console.log(this.getExpiration())
    return moment().isBefore(this.getExpiration())
  }
  
  isLoggedOut() {
      return !this.isLoggedIn()
  }
  
  getExpiration() {
      const expiration = localStorage.getItem("expires_at")
      console.log(expiration)
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }    

  getToken(){
    return localStorage.getItem('token')
  }
}
