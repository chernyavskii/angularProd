import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import {UsersService} from './services/user/users.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { RegistrationFormComponent } from './components/index/registration-form/registration-form.component';
import { LoginFormComponent } from './components/index/login-form/login-form/login-form.component';
import { HomeTestComponent } from './components/index/home-test/home-test.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    HomeTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
