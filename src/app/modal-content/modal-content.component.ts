import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  @Input() public spell;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {}

  passBack() {
    this.activeModal.close(this.spell);
  }

}
