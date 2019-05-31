import { RestaurantsService } from './../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from './../restaurants/restaurant/restaurant.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
   this.restService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurantLoop => this.restaurant = restaurantLoop);
  }

}
