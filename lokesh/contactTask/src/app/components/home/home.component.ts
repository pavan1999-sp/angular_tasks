import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _CS:ContactService) { }

  public contacts:any[] = []

  ngOnInit(): void {
    this._CS.getContacts().subscribe((res:any)=>this.contacts = res)
  }

}
