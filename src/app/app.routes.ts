import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login/:to', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MenuComponent },
      { path: 'reviews', component: ReviewsComponent }
    ]
  },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'cadastro', loadChildren: './cadastro-restaurante/cadastro.module#CadastroModule' },
  {
    path: 'editar/:id',
    canLoad: [LoginService],
    canActivate: [LoginService],
    loadChildren: './cadastro-restaurante/cadastro.module#CadastroModule'
  },
  {
    path: 'order',
    canLoad: [LoginService],
    canActivate: [LoginService],
    loadChildren: './order/order.module#OrderModule'
  },
  { path: 'order-summary', component: OrderSummaryComponent },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: '**', component: NotFoundComponent }
]
