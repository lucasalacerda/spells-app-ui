import { Component, OnInit } from '@angular/core';
import { Spell } from '../spell';
import { SpellService } from '../spell.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {

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

  getAllSpells(): void {
    this.spells = this.spellService.getAllSpells();
  }

  getSpell(id: number): void {  
    var strId = id.toString()
    this.spell = this.spellService.getSpellById(strId);
  }

  openModal(id: number) {
    this.getSpell(id);

    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.spell = this.spell;
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      //implementation
    })
  }
}
