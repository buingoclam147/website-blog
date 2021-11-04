import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-basic',
  templateUrl: './button-basic.component.html',
  styleUrls: ['./button-basic.component.scss']
})
export class ButtonBasicComponent implements OnInit {
  @Input() value = '';
  constructor() { }

  ngOnInit() {
  }

}
