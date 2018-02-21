import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {UsersService} from '../../../../services/user/users.service';
import {User} from '../../../../models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private userService: UsersService, private http: Http, private router: Router) { }

  user = new User();


  ngOnInit() {
  }

/*  login() {
    this.userService.testAuth(this.user)
    /!* .then(res => {
       return this.router.navigateByUrl('users');
     })
     .catch(err => {
       return this.router.navigateByUrl('login');
     });*!/
    return  this.router.navigateByUrl('users');
  }*/

  login() {
    this.userService.testAuth(this.user)
      /*.toPromise()*/
/*
     .then(res => {
*/
    return this.router.navigateByUrl('users');
/*
return  this.router.navigateByUrl('users');
*/
      /*.subscribe(next => {
        this.router.navigateByUrl('/');
      }, error => {
        error = "Bad credentials";
        this.router.navigateByUrl('/login');

      });*/
  }



}
