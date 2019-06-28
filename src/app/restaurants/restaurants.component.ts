import { LoginService } from './../services/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RestaurantsService } from '../services/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {


  searchBarState = 'hidden';

  searchForm: FormGroup;
  searchControl: FormControl;

  restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService, private fb: FormBuilder, private ls: LoginService) { }

  ngOnInit() {
    this.searchControl = this.fb.control('')

    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
    .debounceTime(500)
    .distinctUntilChanged()
    .switchMap(
      searchTerm => this.restaurantsService.restaurants(searchTerm))
      .catch(error => Observable.from([]))
      .subscribe(restaurants => this.restaurants = restaurants)

   this.restaurantsService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

  toggleSearch() {
    if (this.searchBarState === 'hidden') {
      this.searchBarState = 'visible';
    } else {
      this.searchBarState = 'hidden';
    }
  }

  logado(): boolean{
    return this.ls.logado();
  }
}
