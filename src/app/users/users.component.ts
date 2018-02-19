import { Component, OnInit } from '@angular/core';
import {Hero} from '../models/user';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Hero[];

  selectedUser: Hero;

  model: any = {};

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
    this.create();
  }

  getUsers(): void {
    this.userService.getUsers()
      .then(heroes => this.users = heroes);
  }

  onSelect(user: Hero): void {
    this.selectedUser = user;
    console.log("Enter");
  }

  create(): void {
    this.userService.createUser(this.model);
  }

}
