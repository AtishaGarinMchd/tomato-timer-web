import { Component, OnInit } from '@angular/core';

import { MenuItem, SubItem } from '../../models/menu-item';

@Component({
  selector: 'tt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  private menuItems: Array<MenuItem> = [
    { text: 'Tasks', route: '#Tasks', subItems: new Array<SubItem>() },
    { text: 'Timer', route: '#Timer', subItems: new Array<SubItem>()  },
    { text: 'Settings', route: '#Setting', subItems: new Array<SubItem>()  }
  ]

  constructor() { 

  }

  ngOnInit() {

  }

}
