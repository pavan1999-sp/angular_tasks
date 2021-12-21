import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MangerslistService {

  constructor(private http:HttpClient) { }


  public getManagers():Observable<any>{
 return this.http.get("http://localhost:3200/managers");
  }
  public postManagers(data:any):Observable<any>{
   
    return this.http.post("http://localhost:3200/managers",data)
  }
  public EditManagers(id:any,data:any):Observable<any>{
    
    return this.http.put("http://localhost:3200/managers/"+id,data)
  }
  public deleteManager(id:any){
    return this.http.delete("http://localhost:3200/managers/"+id)
  }
}
