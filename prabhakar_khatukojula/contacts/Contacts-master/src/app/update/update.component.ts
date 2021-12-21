import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
updateForm=FormGroup;
constructor(private cntser:ContactsService, private route:Router) { }

public message: string = "";

// printPhoto(files:any) {
//   if (files.length === 0)
//     return;

//   var mimeType = files[0].type;
//   if (mimeType.match(/image\/*/) == null) {
//     this.message = "Only images are supported.";
//     return;
//   }
//   else  this.message = ""

//   var reader = new FileReader();
//   reader.readAsDataURL(files[0]); 
//   reader.onload = (_event) => { 
//     this.src = reader.result; 
//     this.backGroundStyle.backgroundImage = `url(${this.src})` 
//   }
// }


saveContact(addCnt:any) {
  this.cntser.addContact(addCnt).subscribe(res=>{
    this.route.navigate([''])
  })
}

  ngOnInit(): void {
  }

}
