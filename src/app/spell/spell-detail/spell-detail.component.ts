import { Component, OnInit, Input, Pipe } from '@angular/core';
import { SpellService } from '../../spell.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Spell } from '../../models/spell';
import { switchMap } from 'rxjs/operators';
import { of, Observable, pipe } from 'rxjs';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.css']
})
export class SpellDetailComponent implements OnInit {

  constructor(
    private spellService: SpellService, 
    private route: ActivatedRoute
  ) { }

  
  @Input() spell: Spell;

  ngOnInit() {
    this.getDetails();
  }
  
  searchSpells(title: string) {
    console.log(title);
  }

  getDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.spellService.getSpellById(id).subscribe(spell => this.spell = spell);
  }
}
