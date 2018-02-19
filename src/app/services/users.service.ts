import { Injectable } from '@angular/core';
import {Hero} from '../models/user';
import 'rxjs/add/operator/toPromise';
import {Http} from '@angular/http';
import { Headers } from '@angular/http';

@Injectable()
export class UsersService {

  private usersURL = 'http://localhost:8081/heroes/test';
  private testURL = 'http://localhost:8081/heroes/mnb';

  private loginURL = 'http://localhost:8081/login';


  private header = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) { }

  getUsers(): Promise<Hero[]> {
    return this.http.get(this.usersURL)
      .toPromise()
      .then(response => response.json() as Hero[])
      .catch(this.handleError);
  }

  getUser(id: number): Promise<Hero> {
    return this.getUsers()
      .then(users => users.find(user => user.id === id))
      .catch(this.handleError);
  }

  createUser(user: Hero): Promise<Hero> {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.loginURL, JSON.stringify(user), {headers: this.header}).toPromise()
        .then((response => {
          console.log("RESPONSE" + response.json());
          resolve(response.json());
        }))
        .catch((error =>  {
          console.log("CATCH: " + error);
          reject(error);
        }));
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error: ', error);
    return Promise.reject(error.message || error);
  }
}
