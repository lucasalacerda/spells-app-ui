import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  constructor(private messageService: MessageService) {}

  private log(message: string) {
    this.add(`HeroService: ${message}`);
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      this.log(`${operation} failed: ${error}`);

      return of(result as T);
    }
  }

  clear() {
    this.messages = [];
  }
}
