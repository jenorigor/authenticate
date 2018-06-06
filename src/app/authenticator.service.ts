import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  
  private userFlag : boolean;

  private url : string = 'http://localhost:8000';

  constructor(private httpClient: HttpClient) { 
  	this.userFlag = false;
  }


  authenticate ( username : string, password : string) {
  	
  	return this.httpClient.post<any>(this.url+'/api/login', { username: username, password: password })
            .pipe(map((res:any) => {
                return res;
            })); 


  }

  setUserFlag ( flag : boolean ) {
  	this.userFlag = flag;
  }

  getUserFlag () {
  	return this.userFlag;
  }


}
