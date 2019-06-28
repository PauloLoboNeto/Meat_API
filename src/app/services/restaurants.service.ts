import { Item } from './../restaurant-detail/menu/menu-item/menu-item.model';
import { MEAT_API } from '../../../app.api';
import { Restaurant } from './../restaurants/restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  restaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams = undefined;

    if(search){
      params = new HttpParams().set('q', search);
    }
    //  console.log(this.http.get(`${MEAT_API}/restaurants`).map(response => response.ok));
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params: params })

  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
  }

  reviewsRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  }


  atualizarRestaurante(id: string, restaurante: Restaurant): Observable<any> {
    return this.http.put(`${MEAT_API}/restaurants/${id}`, JSON.stringify(restaurante));
  }

  menuItemRestaurant(id: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${MEAT_API}/restaurants/${id}/menu`)
  }
}
