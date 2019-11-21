import { Component, OnInit, Input } from '@angular/core';
import { SpellService } from '../spell.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Spell } from '../spell';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.css']
})
export class SpellDetailComponent implements OnInit {

  constructor(
    private spellService: SpellService, 
    private route: ActivatedRoute,
    private location: Location) { }

  
  @Input() spell: Spell;

  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    const id = +this.route.snapshot.paramMap.get('_id');
    console.log(id);
    this.spellService.getSpellById(id.toString()).subscribe(spell => this.spell = spell);
  }
}
