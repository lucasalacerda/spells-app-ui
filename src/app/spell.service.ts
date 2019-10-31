import { Injectable } from '@angular/core';
import { Spell } from './spell';
import { SPELLS } from './spell-list';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  spells: Spell[];

  constructor() { }

  getAllSpells(): Spell[] {
    return SPELLS;
  }


}
