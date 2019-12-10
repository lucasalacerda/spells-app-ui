import { Pipe, PipeTransform } from '@angular/core';
import { Spell } from '../models/spell';
import { SpellService } from '../spell.service';

@Pipe({
  name: 'filterSpell',
  pure: false
})
export class FilterSpellPipe implements PipeTransform {

  transform(spellList: Spell[], spellName?: string): Spell[] {
    const spell = spellName ? spellName : '';
    const spellFiltered = spellList.filter(str => {
      return str.title.toLowerCase().includes(spell.toLowerCase())
    });
    return spellFiltered;
  }
}
