import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {


  constructor(private cs:ContactsService) { }

  public contacts: Contact[] = [];
  public editObj: Contact = {
    name:"",
    label: "",
    number:0 ,
    email: "",
    id: 0,
  }

  getList(){
    this.cs.getContacts().subscribe((res)=>{
      this.contacts =res;
      
    })
  }

  updateContact(updObj: any) {  
    updObj.id = this.editObj.id;
    console.log(this.editObj.id);  
    this.cs.updateContact(updObj).subscribe(() => this.getList())
  }
  deleteContact(id: number) {
    this.cs.deleteCon(id).subscribe(() => {
      this.getList();
      alert("contact deleted")
    })
  }

  ngOnInit(): void {
    this.getList()
  }

}
