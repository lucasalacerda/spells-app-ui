import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { LoginModel } from "./models/loginModel";
import { Observable, of } from 'rxjs';
import { catchError, map, tap, flatMap } from 'rxjs/operators';
import { MessageService } from './message.service';
import * as moment from "moment";
import { UserToken } from './models/userToken';
import { UserService } from './services/user.service';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authUrl = "http://spells-express.herokuapp.com/api/authenticate";
  verifyUrl = "http://spells-express.herokuapp.com/api/verify";

  userToken: UserToken;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private userService: UserService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  tokenHeader = {
    headers: new HttpHeaders({ 'x-auth-token': localStorage.getItem('id_token') })
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log(error); // log to console instead

      this.log(`${operation} failed: ${error}`);

      return of(result as T);
    }
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('id_token', authResult.data.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  doLogin(email: string, password: string): Observable<string> {
    return this.http.post<string>(this.authUrl, { email, password } as LoginModel, this.httpOptions)
      .pipe(map(auth => {
        this.setSession(auth);
        return auth;
      }),
        catchError(this.handleError<string>('authentication failed'))
      );
  }

  verifyToken(): Observable<User> {
    return this.http.post<UserToken>(this.verifyUrl, {}, this.tokenHeader)
      .pipe(tap(token => this.userToken = token),
        flatMap(user => this.userService.getUserById(user.id)
      ),
        catchError(this.handleError<User>('verify failed'))
      );
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    if (localStorage.getItem('id_token')) return true
    else false
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
