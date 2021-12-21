import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  time = 60;
  min = 4;
  sec = 60;
  timeup = false
  constructor() { }

  timer(){
    if(this.sec==0){
     this.sec=60;
     this.min= this.min-1;
    }
    else {
      this.sec = this.sec - 1
    }
    if (this.min == 0 && this.sec == 0) {
      this.timeup = true;
    }
  }
  ngOnInit(): void {



    setInterval(()=>{
       this.timer()
      }, 100);



  }

}
