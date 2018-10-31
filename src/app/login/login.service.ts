import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import 'rxjs';
import { HttpClient, HttpRequest, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private username: string = "admin";
  private password: string = "admin";
  
  constructor() { }

  protected getUsername() {
    return this.username;
  }

  protected getPassword() {
    return this.password;
  }

  public login(dataObj): Observable<boolean> {
    if (dataObj['username'] == this.getUsername() && dataObj['password'] == this.getPassword()) {
      return observableOf(true);
    }
    return observableOf(false);
  }
}
