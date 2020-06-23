import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'', component:OneComponent},
  {path:'home', component:TwoComponent},
  {path:'all', component:ThreeComponent},
  {path:'employee', component:FourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  OneComponent,
  TwoComponent,
  ThreeComponent,
  FourComponent
]
