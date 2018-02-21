import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http, RequestOptions} from '@angular/http';
import { Headers } from '@angular/http';
import {User} from '../../models/user';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UsersService {

  private usersURL = 'http://localhost:8081/users/';
  private registrationURL = 'http://localhost:8081/registration';

  private mainURL = 'http://localhost:8081/main';

  /*
    let url = `${this.heroesUrl}/${hero.id}`;
  */

///////////////////
  authenticated = false;

  private loginURL = 'http://localhost:8081/login';


  private header = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
    let _build = (<any>http)._backend._browserXHR.build;
    (<any>http)._backend._browserXHR.build = () => {
      let _xhr = _build();
      _xhr.withCredentials = true;
      console.log("XHR ; " + JSON.stringify(_xhr));
      return _xhr;
    };
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

  testAuth (loginDetails: User): Observable<any> { // custom class, may be empty for now

    let headers = new Headers({
      'Authorization': 'Basic ' + btoa(loginDetails.username + ':' + loginDetails.password),
      'X-Requested-With': 'XMLHttpRequest' // to suppress 401 browser popup
    });

    let options = new RequestOptions({
      headers: headers
    });
    let asd = this
      .http
      .post(this.loginURL, loginDetails, options);
    return asd;
   /* .toPromise().then(res => {
        if (res.status !== 200) {
          this.authenticated = false;
        } else {
          this.authenticated = true;
        }
      })
      .catch(err => {
        err.toString();
        console.log(err);
      });*/
    /*
          .catch(e => this.handleError(e)); // handle 401 error - bad credentials
    */
  }

  getMainTest(): Promise<User> {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.mainURL).toPromise()
        .then((response) => {
          resolve(response.json());
        })
        .catch((error) => {
        });
    });
  }



  /*testAuth(credentials: User): Promise<any> {
    console.log("User: +-+ " + JSON.stringify(credentials));
    /!*const myHeaders = new Headers(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});
    myHeaders.append('Content-Type', 'application/json');

    console.log("myHeaders: " + JSON.stringify(myHeaders));*!/

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
    });*/


}
