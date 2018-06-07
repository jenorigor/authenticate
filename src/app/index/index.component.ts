import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from './../authenticator.service';
import {NgForm} from '@angular/forms';
import { Routes, Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  btnvalue : string = "Login";
  btndisabled : boolean = true;
  flag : boolean = false;
  error : boolean = false;
  serverdown : boolean = false;

  loginparams = [
  ];


  constructor(private authenticator:AuthenticatorService, private router: Router ) { }

  ngOnInit() {

    if(localStorage.getItem("loggedinUser") !== null) {
      this.router.navigate(['profile']);
    }
  }

  login ( f: NgForm) {
  		
      this.error = false;
      this.serverdown = false;

  		this.authenticator.authenticate(f.value.username, f.value.password)
            .subscribe(
                data => {
                	if(data.token && data.success == true) {
                		 localStorage.setItem('loggedinUser', JSON.stringify({ token: data.token }));
                     this.router.navigate(['profile']);
                	}

                	else {
                		 this.error = true;
                     f.resetForm();
                	}
                },
                error => {
                    f.resetForm();
                    if(error.status != 200) {
                      this.serverdown = true;
                    }

                    else {
                      this.error = true;
                    }
                }); 


  }

}
