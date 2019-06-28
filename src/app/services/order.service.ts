import { MEAT_API } from '../../../app.api';
import { HttpClient } from '@angular/common/http';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';
import { Injectable } from "@angular/core";
import { Order } from '../order/order.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {

  constructor(
    private cartService: ShoppingCartService,
    private http: HttpClient) { }

  retornarItens(): CartItem[] {
    return this.cartService.itens;
  }

  aumentarItem(item: CartItem) {
    this.cartService.aumentarQuantidade(item);
  }

  retornarTotal(): number {
    return this.cartService.total();
  }

  diminuirItem(item: CartItem) {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.cartService.removerItem(item);
    }
  }

  removerItem(item: CartItem) {
    this.cartService.removerItem(item);
  }

  checkOrder(order: Order): Observable<string> {
    return this.http.post<Order>(`${MEAT_API}/orders`, order)
      .map(order => order.id);
  }

  clear() {
    this.cartService.clear();
  }

}
