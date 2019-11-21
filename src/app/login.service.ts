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

//   login(email:string, password:string ) {
//     return this.http.post<LoginModel>('/api/login', {email, password})
//         .do(res => this.setSession) 
//         .shareReplay();
// }

  doLogin(email: string, password: string): Observable<LoginModel> {
    return this.http.post<LoginModel>(this.loginUrl, { email, password } as LoginModel, this.httpOptions)
    .pipe(
      tap((login: LoginModel) => console.log(`welcome ${email}`)),
      catchError(this.handleError<LoginModel>(`failed ${email}`)))
  }
}
