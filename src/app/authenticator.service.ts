import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  
  private userFlag : boolean;

  private url : string = 'http://localhost/sample.json';

  constructor(private httpClient: HttpClient) { 
  	this.userFlag = false;
  }


  authenticate ( username : string, password : string) {
  	
  	

  }

  setUserFlag ( flag : boolean ) {
  	this.userFlag = flag;
  }

  getUserFlag () {
  	return this.userFlag;
  }


}
