import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from './../authenticator.service';
import { Routes, Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  btnvalue : string = "Logout";

  constructor(private authenticator:AuthenticatorService, private router: Router ) { }

  ngOnInit() {
  }

  logout() {
  	this.authenticator.logout();
  	this.router.navigate(['*']);
  }
}
