import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../models/user';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input()
  user: Hero;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    console.log(this.user);
/*
    this.userService.getUser()
*/
  }

}
