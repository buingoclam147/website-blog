import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-basic',
  templateUrl: './input-basic.component.html',
  styleUrls: ['./input-basic.component.scss']
})
export class InputBasicComponent implements OnInit {
  @Input() placeholder = '';
  value = "";
  constructor() { }

  ngOnInit() {
  }

}
