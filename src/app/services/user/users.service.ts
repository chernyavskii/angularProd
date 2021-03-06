import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
/*
import {Http, RequestOptions} from '@angular/http';
*/
import { Headers } from '@angular/http';
import {User} from '../../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Http, RequestOptions} from '@angular/http';

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
    let header = new Headers();
    header.append('X-Requested-With', 'XMLHttpRequest');
/*
    header.append('Access-Control-Expose-Headers','Authorization');
*/
    /*return new Promise((resolve, reject) => {
      this.http
        .get(this.usersURL).toPromise()
        .then((response) => {
          resolve(response.json());
        })
        .catch((error) => {
        });
    });*/
    return new Promise((resolve, reject) => {
     this.http
       .get(this.usersURL,{ headers: header, withCredentials: true}).toPromise()
       .then((response) => {
         //////HttpClient

         /*
                  resolve(response);
         */
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
       ///////HttpClient

      /* this.http
         .post(this.registrationURL, JSON.stringify(user), {headers: this.header} ).toPromise()
         .then((response => {
           resolve(response.json());
         }))
         .catch((error => {
           reject(error);
         }));*/
     });
   }

  private handleError(error: any): Promise<any> {
    console.error('An error: ', error);
    return Promise.reject(error.message || error);
  }

 /* testAuth (loginDetails: User): Observable<any> { // custom class, may be empty for now

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
  }*/

  /*testAuth(credentials: User, callback) {

    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});
    console.log("headers" + JSON.stringify(headers));

    let vxcvxc = this.http.get(this.loginURL, {headers: headers}).subscribe(response => {
      console.log("????????????" + JSON.stringify(response));
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });
  }*/





 ////////////////// how to save request header authorization angular 2

 ////////////////ТУТ

  testAuth (loginDetails: User): Promise<any> { // custom class, may be empty for now

/*    let header = new Headers({
      'Authorization': 'Basic ' + btoa(loginDetails.username + ':' + loginDetails.password),
      'X-Requested-With': 'XMLHttpRequest'
    });*/

    let header = new Headers();
    header.append('Authorization', 'Basic ' + btoa(loginDetails.username + ':' + loginDetails.password));
    header.append('X-Requested-With', 'XMLHttpRequest');
    header.append('Content-Type','application/json');


    /*   header.append('Access-Control-Allow-Origin', '*');
       header.append('Access-Control-Allow-Credentials', 'true');
       header.append('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
       header.append('Content-Type', 'application/json,application/x-www-form-urlencoded');
       header.append('Access-Control-Request-Headers', 'Content-type,X-Requested-With,Origin,accept');*/
    let options = new RequestOptions({ headers: header, withCredentials: true });


    let asd = this
      .http
      .post(this.loginURL, loginDetails, options).toPromise().then(resp => {console.log("RESP " + resp); })

    return asd;
  }














/*  testAuth (loginDetails: User): Promise<any> { // custom class, may be empty for now

    let headers = new Headers({
      'Authorization': 'Basic ' + btoa(loginDetails.username + ':' + loginDetails.password),
      'X-Requested-With': 'XMLHttpRequest' // to suppress 401 browser popup
    });

    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.loginURL, loginDetails, options).toPromise()
        .then((response) => {
/!*
          resolve(response);
*!/
          console.log(response);
          if (response.status === 200) {
            resolve(this.authenticated = true);
          } else {
            resolve(this.authenticated = false);
          }
        })
        .catch((error) => reject(error));
    });
    /!*let asd = this
      .http
      .post(this.loginURL, loginDetails, options)

    return asd;*!/
  }*/

  getMainTest(): Promise<User> {
    let header = new Headers();
    header.append('X-Requested-With', 'XMLHttpRequest');
    return new Promise((resolve, reject) => {
      this.http
        .get(this.mainURL, {headers: header, withCredentials: true }).toPromise()
        .then((response) => {
          //////HttpClient
/*
          resolve(response.json());
*/
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
