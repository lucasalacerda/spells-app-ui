import { Component, OnInit } from '@angular/core';
import { Spell } from '../spell';
import { SPELLS } from '../spell-list';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {

  // spells: Spell[];

  spells = SPELLS;


  constructor() { }

  ngOnInit() {
    this.getAllSpells();
  }

  getAllSpells(): void {  
    
  }
}
