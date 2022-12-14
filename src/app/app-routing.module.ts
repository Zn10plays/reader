import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeBodyComponent} from "./home-body/home-body.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', component: HomeBodyComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
