import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public nme=''
  public a=[]

  constructor() { }

  
show(){
  return this.a.push(this.nme);
}
remove(k){
 return this.a.splice(k,1);
}

  ngOnInit() {
  }

  


}
