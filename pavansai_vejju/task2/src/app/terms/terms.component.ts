import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  username:any
  usermail:any
  logged=false;
  constructor() { }
  login(){
   this.logged=true;
  }
  ngOnInit(): void {
  }

}
