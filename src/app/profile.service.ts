import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  private url : string = 'http://localhost:8000';

  private obj;
  private headers;

  constructor(private httpClient: HttpClient) { }

  getprofile() {

  	this.obj = JSON.parse(localStorage.getItem("loggedinUser"));

  	this.headers = new HttpHeaders({
	    'Content-Type': 'application/json',
	    'Authorization': 'Bearer '+this.obj.token
    });

  	return this.httpClient.get<any>(this.url+'/api/getprofile', { headers: this.headers } )
            .pipe(map((res:any) => {
                
                return res;

            })); 


  }

}
