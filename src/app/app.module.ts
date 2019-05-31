import { OrderService } from './order/order.service';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { RestaurantsService } from './restaurants/restaurants.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ROUTES } from './app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { MenuItemComponent } from './restaurant-detail/menu/menu-item/menu-item.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { ReviewComponent } from './restaurant-detail/reviews/review/review.component';
import { OrderComponent } from './order/order.component';
import { RadiusComponent } from './radius/radius.component';
import { OrderItensComponent } from './order/order-itens/order-itens.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    MenuComponent,
    MenuItemComponent,
    RestaurantDetailComponent,
    ShoppingCartComponent,
    ReviewsComponent,
    ReviewComponent,
    OrderComponent,
    RadiusComponent,
    OrderItensComponent,
    DeliveryCostsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService, ShoppingCartService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
