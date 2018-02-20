import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from '../../../services/user/users.service';
import {User} from '../../../models/user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  user = new User();
  submitted = false;
  @Output() newUserEvent = new EventEmitter();

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.registration();
  }

  registration() {
    let result = this.userService.registration(this.user)
      .then(res => {
        this.user = res;
        this.newUserEvent.emit(this.user);
      })
      .catch(err => err.toString());
    this.submitted = true;
  }

}
