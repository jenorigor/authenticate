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
  	
  	return this.httpClient.post<any>(this.url+'/api/authenticate', { username: username, password: password })
            .pipe(map((res:any) => {
                // login successful if there's a jwt token in the response
                if (res && res.token) {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    //localStorage.setItem('currentUser', JSON.stringify({ username, token: res.token }));
                }
            }));

  }

  setUserFlag ( flag : boolean ) {
  	this.userFlag = flag;
  }

  getUserFlag () {
  	return this.userFlag;
  }


}
