import { Injectable, OnInit, Input } from '@angular/core';
import { Character } from '../models/character';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService implements OnInit {
 

  characterUrl = 'http://spells-express.herokuapp.com/api/characters';
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  }

  ngOnInit() {
  }

  constructor(
    private http: HttpClient
  ) { }

  //TODO: FIX
  // getCharacterById(id: string): Observable<Character> {
  //   this.http.get<Character>(`this.characterUrl/${id}`, this.httpOptions)
  //     .pipe(map(
  //       char => {
  //         return char;
  //       }
  //     )
  //   );
  // }
}
