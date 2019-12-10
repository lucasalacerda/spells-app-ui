import { Component, OnInit } from '@angular/core';
import { ClassCharacterService } from 'src/app/services/class-character.service';
import { ClassChar } from 'src/app/models/classChar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Spell } from 'src/app/models/spell';
import { SpellService } from 'src/app/spell.service';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/models/character';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  constructor(
      private classServie: ClassCharacterService,
      private fb: FormBuilder,
      private spellServie: SpellService,
      private characterService: CharacterService,
      private userService: UserService
    ) {
    this.form = this.fb.group({
      nickname: ['', Validators.required],
      spells: [[]],
      classChar: ['', Validators.required],
      background: ['', Validators.required],
      img: [''],
    });
  }

  form: FormGroup;
  classList: ClassChar[];
  spells: Spell[];
  initialLevel = 1;
  success: boolean;
  character: Character;
  errorMessage = '';


  ngOnInit() {
    this.spellServie.getAllSpells().subscribe(spells => this.spells = spells);
    this.classServie.getAllClasses().subscribe(classList => this.classList = classList);
  }


  addCharacterToUser() {
    
  }

  create() {
    let value = this.form.value;

    this.characterService.create(value.nickname, value.background, value.img, value.spells, value.classChar, this.initialLevel)
      .subscribe(character => {
        if(character !== null) {
          this.success = true;
          this.character = character 
        } 
      }, err => { 
         this.errorMessage = err;
      });
  }
}
