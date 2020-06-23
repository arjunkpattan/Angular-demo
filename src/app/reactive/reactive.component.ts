import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyValidation } from 'src/my.validation';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }

  rgstrForm = new FormGroup({
    name : new FormControl('',[ Validators.required,MyValidation.containSpace ],),
    age : new FormControl('',Validators.required),

  });

  get name(){
    return this.rgstrForm.get('name');
  }
  get age(){
    return this.rgstrForm.get('age');
  }
  ngOnInit() {
  }

}
