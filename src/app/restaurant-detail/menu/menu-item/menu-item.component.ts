import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

@Input()
item: Item

@Output()
add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  adicionar(){
    this.add.emit(this.item)
  }

}
