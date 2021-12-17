import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaperService {

  constructor(private http:HttpClient) { }

public getquestion(id:any):Observable<any>{
  return this.http.get("http://localhost:3000/questions/"+id)
}

public postanswer():Observable<any>{
  return this.http.get("http://localhost:3400/answers",)
}



}
