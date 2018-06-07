import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from './../authenticator.service';
import { Routes, Router,RouterModule } from '@angular/router';
import { ProfileService } from './../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  btnvalue : string = "Logout";
  profilestring : string ;
  username : string;
  
  constructor(private authenticator:AuthenticatorService, private router: Router, private profileservice : ProfileService ) { }

  ngOnInit() {
      this.profileservice.getprofile()
            .subscribe(
                data => {
                  if(data.success == true) {
                     this.profilestring = data.profilestring;
                     this.username = data.username;
                  }

                  else {
                     this.logout();
                  }
                },
                error => {
                   this.logout();  
                }); 
  }

  logout() {
  	this.authenticator.logout();
  	this.router.navigate(['*']);
  }
}
