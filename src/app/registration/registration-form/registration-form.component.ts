import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Hero} from '../../models/user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  hero = new Hero();

  submitted = false;

  testP: Hero;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.create();
  }

  create() {
    console.log(this.submitted);
    let asd = this.userService.createUser(this.hero);
     /* .then(res => {
        this.testP = res;
      })*/
    this.submitted = true;
  }

}
