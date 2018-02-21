import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../services/user/users.service';

@Component({
  selector: 'app-home-test',
  templateUrl: './home-test.component.html',
  styleUrls: ['./home-test.component.css']
})
export class HomeTestComponent implements OnInit {

  constructor(private userService: UsersService) { }
  ngOnInit() {
    this.authenticated();
    this.getMain();
  }

  getMain() {
    return this.userService.getMainTest();
  }

  authenticated() {
/*
    console.log("home_auth:" + this.userService.authenticated);
*/
    /*this.auth = this.userService.authenticated;*/
    console.log("SERVICE: " + this.userService.authenticated);
    return this.userService.authenticated;
/*
    return this.userService.authenticated;
*/
  }
}
