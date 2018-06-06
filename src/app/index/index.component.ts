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

  loginparams = [
  ];


  constructor(private authenticator:AuthenticatorService) { }

  ngOnInit() {
  }

  login ( f: NgForm) {
  		
  		console.log(this.authenticator.authenticate(f.value.username, f.value.password));
  		
  		if(this.authenticator.authenticate(f.value.username, f.value.password)) {
  			this.authenticator.setUserFlag(true);
  		}

  		if(this.authenticator.getUserFlag()) {
  			console.log('Authenticated');
  		}

  		else {
  			console.log('Failed!');
  		}

  }

}
