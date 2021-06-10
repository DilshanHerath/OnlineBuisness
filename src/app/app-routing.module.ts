import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {DressComponent} from './component/dress/dress.component';
import {TopsComponent} from './component/tops/tops.component';
import {OfficeComponent} from './component/office/office.component';
import {TshirtsComponent} from './component/tshirts/tshirts.component';
import {SignUpComponent} from './component/sign-up/sign-up.component';
import {LoginComponent} from './component/login/login.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {path: 'home', component: HomeComponent},
  {path: 'dress', component: DressComponent},
  {path: 'tops', component: TopsComponent},
  {path: 'tshirts', component: TshirtsComponent},
  {path: 'office', component: OfficeComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'login', component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

