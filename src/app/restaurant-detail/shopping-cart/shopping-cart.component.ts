import { Item } from './../menu/menu-item/menu-item.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  itens(): any[]{
    return this.shoppingCartService.itens;
  }

  total(): number{
    return this.shoppingCartService.total();
  }

  clear(){
    this.shoppingCartService.clear();
  }

  remove(item: any ){
    this.shoppingCartService.removerItem(item);
  }

  addItem(item: any){
    this.shoppingCartService.adicionar(item);
  }
}
