import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-basic',
  templateUrl: './button-basic.component.html',
  styleUrls: ['./button-basic.component.scss']
})
export class ButtonBasicComponent implements OnInit {
  @Input() value = '';
  @Output() click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onChange(item): void {
    this.click.emit(item);
  }
}
