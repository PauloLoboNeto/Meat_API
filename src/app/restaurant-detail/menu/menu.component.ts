import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../services/restaurants.service';
import { Item } from './menu-item/menu-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  itens: Item[];

  constructor(private restsService: RestaurantsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.restsService.menuItemRestaurant(this.route.parent.snapshot.params['id']).subscribe(itens => this.itens = itens);
  }

  adicionarItemNoCarrinho(item: Item) {
    this.itens.push(item);
  }

  retornarItensDoCarrinho(): Item[] {
    return this.itens;
  }

}
