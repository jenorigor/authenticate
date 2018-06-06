import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from './../authenticator.service';
import {NgForm} from '@angular/forms';
import { first } from 'rxjs/operators';

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
            .pipe(first())
            .subscribe(
                data => {
                    this.flag = true;
                },
                error => {
                	this.flag = false;
                });

  		if(this.flag) {
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
