import { Item } from './../menu/menu-item/menu-item.model';
import { CartItem } from './cart-item.model';
export class ShoppingCartService {

  itens: CartItem[] = [];

  clear() {
    this.itens = [];
  }

  total(): number {
    return this.itens.map(item => item.value()).reduce((prev, value) => prev + value, 0);
  }

  adicionar(item: Item) {
    let foundItem = this.itens.find((mItem)=> mItem.menuItem.id === item.id);

    if (foundItem) {
      this.aumentarQuantidade(foundItem);
    } else {
      this.itens.push(new CartItem(item));
    }
  }

  removerItem(item: CartItem) {
    this.itens.splice(this.itens.indexOf(item), 1);
  }

  aumentarQuantidade(item: CartItem){
    item.quantity = item.quantity + 1;
  }

  diminuirQuantidade(item: CartItem){
    item.quantity = item.quantity - 1;
  }
}
