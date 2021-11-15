import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-basic',
  templateUrl: './input-basic.component.html',
  styleUrls: ['./input-basic.component.scss']
})
export class InputBasicComponent implements OnInit {
  @Input() placeholder = '';
  @Input() value = "";
  @Output('valueChange') change = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  emitChangeValue(event) {
    this.change.emit(event);
  }
}
