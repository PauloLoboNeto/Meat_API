import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/radius/radio-option.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  precoFrete: number = 8;

  paymentsOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON' },
    {label: 'Cartão de Débito', value: 'DEB' },
    {label: 'Cartão Refeição', value: 'REF' }
  ]


  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  retornarTotal(): number{
    return this.orderService.retornarTotal();
  }

  cartItens(): CartItem[]{
    return this.orderService.retornarItens();
  }

  aumentarQuantidade(item: CartItem){
    this.orderService.aumentarItem(item);
  }

  diminuirQuantidade(item: CartItem){
    this.orderService.diminuirItem(item);
  }

  removerItem(item: CartItem){
    this.orderService.removerItem(item);
  }

  checkOrder(order: Order){
    order.orderItems =  this.cartItens().map((item: CartItem)=> new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order)
    .subscribe((orderId: string) => {
      console.log(`Compra concluída: ${orderId}`)
    });

    this.orderService.clear();
    console.log(order);
  }
}
