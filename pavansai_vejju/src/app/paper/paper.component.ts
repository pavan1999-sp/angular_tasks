import { Component, OnInit } from '@angular/core';
import { PaperService } from '../paper.service';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {
question:any
countnum=1;
public arr: any[]=[]
ans:any
marks=0;
  constructor(private qs:PaperService) { }
getans(){
  this.qs.postanswer().subscribe((posres)=>{
    this.ans=posres;
     })
}
  onSubmit(form:any) {
    this.arr.map((x:any,index:any)=>{
  if(x==this.ans[index].answer){
   this.marks+=1;
  }
  
return this.marks;
    })

    }
preORnex(ans:any,id:any,num:any){
 
  console.log("this.countnum")
  console.log(this.countnum)
  if(num==(1)){
    console.log("ppp")
  this.arr[id-1]=(ans.form.value.answer)
 }else{
  // this.arr[id]=(ans.form.value.answer)
  console.log("k")

 }
 
  
if(this.countnum<=10&&this.countnum>0){
  console.log("khh")
  this.countnum=id+num;
  this.getquestion()
  
}

}


public getquestion(){
  this.qs.getquestion(this.countnum).subscribe((posres)=>{

this.question=posres;
console.log("thi")
console.log(this.question)
console.log(this.countnum)
  })
}


  ngOnInit(): void {
    this.getquestion()
    this.getans();
   
  }

}
