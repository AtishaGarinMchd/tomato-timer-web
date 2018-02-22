import { Component, OnInit, Input } from '@angular/core';

import { MenuItem } from './../../models/menu-item';

@Component({
  selector: 'tt-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {

  @Input() menuItem: MenuItem;

  constructor() { }

  ngOnInit() {
  }

}
