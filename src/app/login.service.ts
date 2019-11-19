import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from "./models/loginModel";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = "http://spells-express.herokuapp.com/api/authenticate";

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  doLogin(email: string, password: string): Observable<LoginModel> {
    const login = new LoginModel(email, password);

    return this.http.post<LoginModel>(this.loginUrl, login, this.httpOptions)
    .pipe(
      tap((login: LoginModel) => console.log(`welcome ${login.email}`)),
      catchError(this.handleError<LoginModel>(`login ${login.email}`)))
  }
}
