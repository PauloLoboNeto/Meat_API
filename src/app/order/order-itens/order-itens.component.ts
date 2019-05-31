import { ShoppingCartService } from './../../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from './../../restaurant-detail/shopping-cart/cart-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html',
  styles: ['./style.css']
})
export class OrderItensComponent implements OnInit {

  @Input()
  itens: CartItem[]

  @Output()
  aumentarQuant = new EventEmitter<CartItem>();

  @Output()
  diminuirQuant = new EventEmitter<CartItem>();

  @Output()
  remover = new EventEmitter<CartItem>();



  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {

  }

  aumentarQuantidadeItem(item: CartItem){
    this.aumentarQuant.emit(item)

    //  item.quantity = item.quantity + 1;
  }

  diminuirQuantidadeItem(item: CartItem){
   this.diminuirQuant.emit(item)

    // if(item.quantity != 0){
    //  item.quantity = item.quantity - 1;
    //}else{
  }

  removerItem(item: CartItem){
    this.remover.emit(item)
  }
}
