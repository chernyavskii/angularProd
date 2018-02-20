import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {User} from '../../models/user';
import {UsersService} from '../../services/user/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  selectedUser: User;
  newUser: User;
/*
  authenticated = false;
*/


  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
    this.authenticated();
  }

  getUsers() {
    let result = this.userService.getUsers()
      .then(res => {
        this.users = res;
      })
      .catch(err => err.toString());
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  updateListOfUsers(user: User) {
    this.users.push(user);
  }

  authenticated() {
    console.log("authenticatedauthenticated:" + this.userService.authenticated);
    return this.userService.authenticated;
  }

}
