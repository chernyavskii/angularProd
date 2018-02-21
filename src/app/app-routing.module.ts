import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {RegistrationFormComponent} from './components/index/registration-form/registration-form.component';
import {LoginFormComponent} from './components/index/login-form/login-form/login-form.component';
import {HomeTestComponent} from './components/index/home-test/home-test.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'login', component: LoginFormComponent},
  {path: '', component: HomeTestComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
