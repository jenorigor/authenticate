import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from './../authenticator.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  btnvalue : string = "Login";
  btndisabled : boolean = true;
  flag : boolean = false;

  loginparams = [
  ];


  constructor(private authenticator:AuthenticatorService) { }

  ngOnInit() {
  }

  login ( f: NgForm) {
  		
  		this.authenticator.authenticate(f.value.username, f.value.password)
            .subscribe(
                data => {
                	if(data.success == true) {
                		console.log('Authenticated!');
                	}

                	else {
                		console.log('Failed!');
                	}
                },
                error => {
                	console.log('Failed!');
                }); 




  }

}
