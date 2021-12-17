import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(contacts: any[],searchKey: string ): any[] {
    if(searchKey.trim().length == 0)
    return contacts;
    else{
      return contacts.filter((contact:any)=>{
        return contact.firstname.toLowerCase().match(searchKey.toLowerCase()) 
        || contact.lastname.toLowerCase().match(searchKey.toLowerCase())
         || contact.email.toLowerCase().match(searchKey.toLowerCase())
         || contact.text.toLowerCase().match(searchKey.toLowerCase())
      })
    }
  }

}
