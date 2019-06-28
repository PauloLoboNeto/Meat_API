import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from '../services/order.service';
import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radius/radio-option.component';
import { Order, OrderItem } from './order.model';
import 'rxjs/add/operator/do';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderId: string;
  orderForm: FormGroup;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

  precoFrete: number = 8;

  paymentsOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' }
  ]


  constructor(private orderService: OrderService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      email: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      paymentOption: this.fb.control('', Validators.required)
    }, { validator: OrderComponent.equalsTo });
  }

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');
    if (!email || !emailConfirmation) {
      return undefined;
    };

    if (email.value !== emailConfirmation.value) {
      return { emailsNotMatch: true };
    }
    return undefined;
  }

  retornarTotal(): number {
    return this.orderService.retornarTotal();
  }

  cartItens(): CartItem[] {
    return this.orderService.retornarItens();
  }

  aumentarQuantidade(item: CartItem) {
    this.orderService.aumentarItem(item);
  }

  diminuirQuantidade(item: CartItem) {
    this.orderService.diminuirItem(item);
  }

  removerItem(item: CartItem) {
    this.orderService.removerItem(item);
  }

  isOrderCompleted(): boolean {
    return this.orderId !== undefined;
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItens().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order)
      .do((orderId: string) => {
        this.orderId = orderId;
      })
      .subscribe((orderId: string) => {
        this.router.navigate(['/order-summary']);
        this.orderService.clear();
      });
  }
}
