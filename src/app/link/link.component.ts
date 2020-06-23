import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit,OnDestroy {

  intervalId = 0;
  message = '';
  seconds = 11;

  // @Input() public name: string;

  // @Output() public childEvent=new EventEmitter();
  

  

  constructor() { }

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    this.clearTimer();
  }
  // fireEvent(){
  //   this.childEvent.emit("WelcomeArjun");
  // }
  startTimer(){
    alert("Start function of child called");
    this.countDown();

  }
  stopTimer(){
    alert("Stop function of child called");
    this.clearTimer();
    this.message=`Paused the Timer at ${this.seconds} seconds`;
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }


  private countDown(){

    this.clearTimer();
    this.intervalId = window.setInterval(()=>{
      this.seconds -=1;
      if(this.seconds === 0){
        this.message = 'Time Up!'
      }
      else{
        if(this.seconds<0){
          this.seconds= 10;
        }
        this.message=`Remaining second :: ${this.seconds}`;
      }
    },1000);
  }
  

}
