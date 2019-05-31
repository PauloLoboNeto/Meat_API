import { Review } from './review/review.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RestaurantsService } from './../../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<Review>

  constructor(private restService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restService.reviewsRestaurant(this.route.parent.snapshot.params['id']);
    // || this.restService.reviewsRestaurant(this.route.parent.snapshot.params['id']).subscribe() caso não utilizasse Observable<> como tipo do objeto
  }
}
