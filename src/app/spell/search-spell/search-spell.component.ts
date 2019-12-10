import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModel, FormGroup, FormBuilder } from '@angular/forms';
import { SpellService } from 'src/app/spell.service';

@Component({
  selector: 'app-search-spell',
  templateUrl: './search-spell.component.html',
  styleUrls: ['./search-spell.component.css']
})
export class SearchSpellComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      spellTitle: ['']
    });
  }

  @Output() spellNameFiltered = new EventEmitter<string>();
  form: FormGroup;


  ngOnInit(): void {
  }

  eventEmmiter() {
    this.spellNameFiltered.emit(this.form.value.spellTitle);
  }


}
