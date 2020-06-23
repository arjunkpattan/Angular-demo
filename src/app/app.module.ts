import { SortPipe } from './app.sort';
import { ServerService } from './services/server.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {FormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MyValidation } from 'src/my.validation';
import { ConsumeHttpComponent } from './consume-http/consume-http.component';
import { HttpClientModule } from '@angular/common/http';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinkComponent } from './link/link.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { TimerComponent } from './timer/timer.component';
import { PipesComponent } from './pipes/pipes.component';
import { SortPipe } from './app.sort';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ReactiveComponent,
    ConsumeHttpComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    NavbarComponent,
    LinkComponent,
    ParentComponentComponent,
    TimerComponent,
    PipesComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

