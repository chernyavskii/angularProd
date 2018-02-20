import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http} from '@angular/http';
import { Headers } from '@angular/http';
import {User} from '../../models/user';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class UsersService {

  private usersURL = 'http://localhost:8081/users/';
  private registrationURL = 'http://localhost:8081/registration';
  /*
    let url = `${this.heroesUrl}/${hero.id}`;
  */

///////////////////
  authenticated = false;

  private loginURL = 'http://localhost:8081/login';


  private header = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.usersURL).toPromise()
        .then((response) => {
          resolve(response.json());
        })
        .catch((error) => {
        });
    });
  }

  getUser(id: number): Promise<User> {
    return this.getUsers()
      .then(users => users.find(user => user.id === id))
      .catch(this.handleError);
  }

  registration(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.registrationURL, JSON.stringify(user), {headers: this.header}).toPromise()
        .then((response => {
          resolve(response.json());
        }))
        .catch((error => {
          reject(error);
        }));
    });
  }


  private handleError(error: any): Promise<any> {
    console.error('An error: ', error);
    return Promise.reject(error.message || error);
  }

заголовки берешь не те, поменяй на myHeaders, раскомментируй
  testAuth(credentials: User): Promise<any> {
    console.log("User: +-+ " + JSON.stringify(credentials));
    /*const myHeaders = new Headers(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});
    myHeaders.append('Content-Type', 'application/json');

    console.log("myHeaders: " + JSON.stringify(myHeaders));*/

    return new Promise((resolve, reject) => {
      this.http
        .post(this.loginURL, JSON.stringify(credentials), {headers: this.header}).toPromise()
        .then((response => {
          if (response.ok) {
            resolve(this.authenticated = true);
          } else {
            resolve(this.authenticated = false);
          }
        }))
        .catch(error => reject(error));
    });
  }

}
