import { ServerService } from './../services/server.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-consume-http',
  templateUrl: './consume-http.component.html',
  styleUrls: ['./consume-http.component.css']
})
export class ConsumeHttpComponent implements OnInit {
  employees;
    

  constructor(private httpclient:HttpClient, private n:ServerService) { }

  ngOnInit() {
    this.n.display();
    this.httpclient.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(response =>{
      console.log(response);

      this.employees=response;
    
      console.log(this.employees);
    })
  }

}
