import { MEAT_API } from './../../../app.api';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Item } from './../restaurant-detail/menu/menu-item/menu-item.model';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from "@angular/core";
import { Order } from './order.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService{


  constructor(private cartService: ShoppingCartService, private http: Http){}

  retornarItens(): CartItem[]{
    return this.cartService.itens;
  }

  aumentarItem(item: CartItem){
    this.cartService.aumentarQuantidade(item);
  }

  retornarTotal(): number{
    return this.cartService.total();
  }

  diminuirItem(item: CartItem){
   item.quantity = item.quantity - 1;
   if(item.quantity === 0){
     this.cartService.removerItem(item);
   }
  }

  removerItem(item: CartItem){
    this.cartService.removerItem(item);
  }

  checkOrder(order: Order): Observable<string>{
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    const resquestOption = new RequestOptions({headers: headers})

    return this.http.post(
      `${MEAT_API}/orders`, JSON.stringify(order), resquestOption)
      .map(response => response.json())
  }

  clear(){
    this.cartService.clear();
  }

}
