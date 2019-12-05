import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
    ) { }

  @Input() user: User;
  @Input() character: Character;

  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.characterService.getCharacterById(id).subscribe(char => this.character = char);
  }
}

