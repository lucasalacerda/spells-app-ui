import { Injectable } from '@angular/core';
import { ClassChar } from '../models/classChar';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class ClassCharacterService {

  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  classChar: ClassChar[];
  classCharUrl = 'http://spells-express.herokuapp.com/api/class';

  getAllClasses(): Observable<ClassChar[]> {
    return this.http.get<ClassChar[]>(this.classCharUrl,this.httpOptions)
    .pipe(map(classChar => {
      return classChar;
    })
    ,catchError(this.messageService.handleError<ClassChar[]>('get user failed'))
    )
  }
}
