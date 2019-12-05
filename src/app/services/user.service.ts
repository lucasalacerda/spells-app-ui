import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { User } from '../models/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoginService } from '../login.service';
import { UserToken } from '../models/userToken';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: UserToken;
  userUrl = 'http://spells-express.herokuapp.com/api/users';

  constructor( 
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getUserById(id: string): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url, this.httpOptions)
      .pipe(map(user => {
         return user
      })
      ,catchError(this.messageService.handleError<User>('get user failed'))
    );
  }
}
