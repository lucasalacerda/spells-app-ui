import { Injectable, OnInit, Input } from '@angular/core';
import { Character } from '../models/character';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Spell } from '../models/spell';
import { ClassChar } from '../models/classChar';

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

  create(nickname: string, background: string, img: string, 
        spells: Spell[], classChar: ClassChar, level: number): Observable<Character> {

    console.log(nickname);
    console.log(background);


    let char = new Character();
    char.nickname = nickname;
    char.background = background;
    char.img = img;
    char.spells = spells;
    char.class = classChar;
    char.level = level;

    console.log(char)

    return this.http.post<Character>(this.characterUrl, char, this.httpOptions)
    .pipe(map(
      char => {
        return char;
      }
    ))
  }
 

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.characterUrl}/${id}`, this.httpOptions)
      .pipe(map(
        char => {
          return char;
        }
      )
    );
  }
}
