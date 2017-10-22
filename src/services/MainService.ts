import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class MainService {
  BASE_URL = 'http://localhost:5000/';
  constructor( private http: Http){

  }
  login(postData): Observable<any> {
    return this.http.post( this.BASE_URL+ 'login', postData).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }
  signup(postData): Observable<any> {
    return this.http.post( this.BASE_URL+ 'signup', postData).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }

  getConferenceList(): Observable<any> {
    return this.http.get( this.BASE_URL+ 'conference').map(data => data.json()).catch(err => Observable.throw(err.json()));
  }

  getConferenceDetails(cid):Observable<any> {
    return this.http.get( this.BASE_URL+ 'conference/'+cid).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }

  addConference(post_data): Observable<any> {
    return this.http.post( this.BASE_URL+ 'conference', post_data).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }

  getSubList(uid):Observable<any> {
    return this.http.get( this.BASE_URL+ 'conference/user/'+uid).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }

  conf_subscribe(post_data):Observable<any> {
    return this.http.post( this.BASE_URL+ 'conference/register', post_data).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }

  getSearch():Observable<any> {
    return this.http.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyAqcDlb9LU9GHFGDFjfcnek6Qs3vHjfC_I&cx=004642229610508845056:rl4uzh1-kqw&q=sorry').map(data => data.json()).catch(err => Observable.throw(err.json()));
  }
}
