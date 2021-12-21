import { Component, OnInit } from '@angular/core';
import { MangerslistService } from '../mangerslist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Manager_Lits:any
selecteddata:any
itm=true;
  constructor(private _ms:MangerslistService) { }
 public getManagerlist(){
   this._ms.getManagers().subscribe((posres)=>{

this.Manager_Lits=posres;

   })
 }

 public edit(data:any){
  console.log("data")
   console.log(data)
this.selecteddata=data;

 }
 public deletmanager(id:any){
   this._ms.deleteManager(id.id).subscribe((posres)=>{
     console.log(posres);
     this.getManagerlist();
   })

 }


  ngOnInit(): void {
    this.getManagerlist();
  }

}
