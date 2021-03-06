import { Injectable, ErrorHandler } from '@angular/core';
import { Spell } from './models/spell';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  spells: Spell[];
  spellUrl = "http://spells-express.herokuapp.com/api/spell";

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService) { }

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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllSpells(): Observable<Spell[]> {
    return this.httpClient.get<Spell[]>(this.spellUrl)
      .pipe(
        tap(_ => this.log('fetched spells')),
        catchError(this.handleError<Spell[]>('getSpells', []))
      );
  }

  getSpellById(id: string): Observable<Spell> {
    const url = `${this.spellUrl}/${id}`;
    return this.httpClient.get<Spell>(url).pipe(
      tap(_ => this.log('fetched spell')),
      catchError(this.handleError<Spell>(`getSpell ${id}`))
    );  
  }

}
