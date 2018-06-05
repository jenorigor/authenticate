import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  
  private userFlag : boolean;

  constructor() { 
  	this.userFlag = false;
  }

  authenticate ( username : string, password : string) {
  	
  	if(username == 'admin' && password == 'admin') {
  		return true;
  	}

  	else {
  		return false;
  	}
  	
  }

  setUserFlag ( flag : boolean ) {
  	this.userFlag = flag;
  }

  getUserFlag () {
  	return this.userFlag;
  }


}
