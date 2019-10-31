import { Component, OnInit } from '@angular/core';
import { Spell } from '../spell';
import { SPELLS } from '../spell-list';
import { SpellService } from '../spell.service';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {

  spells: Spell[];

  constructor(private spellService: SpellService) { }

  ngOnInit() {
    this.getAllSpells();
  }

  getAllSpells(): void {  
    this.spells = this.spellService.getAllSpells();
  }
}
