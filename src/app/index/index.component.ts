import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
  }

  login () {
  		
  }

}
