import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from '../manager';
import { MangerslistService } from '../mangerslist.service';

@Component({
  selector: 'app-formcmp',
  templateUrl: './formcmp.component.html',
  styleUrls: ['./formcmp.component.css']
})
export class FormcmpComponent implements OnInit {
manager= new Manager()
@Input() parentData:any
listform:any
constructor(private _ms:MangerslistService,private router: Router) { }
  onsubmit(){
    if(this.parentData){
this._ms.EditManagers(this.parentData.id,this.manager).subscribe((posres)=>{
  console.log(posres)
})

    }else{
   
 
      this._ms.postManagers(this.manager).subscribe((posres)=>{
        console.log(posres)
  this.router.navigate([""])

        
      })
    }
    
  }

  ngOnInit(): void {
  
    if(this.parentData){
      this.manager=this.parentData;

    }
  }

}
