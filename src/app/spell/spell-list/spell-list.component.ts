import { Component, OnInit, OnDestroy } from '@angular/core';
import { Spell } from '../../models/spell';
import { SpellService } from '../../spell.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../../modal-content/modal-content.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit, OnDestroy {

  spellsSub: Subscription;
  spells: Spell[];
  spell: Spell;

  constructor(
    private spellService: SpellService,
    private modalService: NgbModal,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAllSpells();
  }

  ngOnDestroy(): void {
    this.spellsSub.unsubscribe();
  }

  getAllSpells(): void {
    this.spellsSub = this.spellService.getAllSpells()
      .subscribe(
        spells => this.spells = spells,
        error => this.spells = error);
  }

  getSpell(id: string): Spell { 
   return this.spells.find(spell => spell.id === id);
  }

  openModal(id: string) {
    this.spell = this.getSpell(id);
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.spell = this.spell;
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      //implementation
    })
  }
}
