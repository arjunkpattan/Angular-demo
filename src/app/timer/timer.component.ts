import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service'


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor( private fun: ServerService) { }

  ngOnInit() {
  }

  show(){
    this.fun.display();
  }
  

}
