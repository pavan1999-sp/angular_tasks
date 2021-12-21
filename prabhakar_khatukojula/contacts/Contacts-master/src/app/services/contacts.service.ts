import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private hp:HttpClient) { }

  getContacts():Observable<any>{
    return this.hp.get("http://localhost:4000/contacts")
  }

  addContact(data:any):Observable<any> {
    return this.hp.post("http://localhost:4000/contacts",data)
  }

  updateContact(data:any):Observable<any> {
    return this.hp.put("http://localhost:4000/contacts/"+data.id,data)
  }
  deleteCon(id:number):Observable<any> {
    return this.hp.delete("http://localhost:4000/contacts/"+id)
  }
}
