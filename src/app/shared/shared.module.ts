import { AuthInterceptor } from '../security/auth.interceptor';
import { LeaveOrderGuard } from './../order/leaveOrder.guard';
import { NotificacaoService } from './../services/notificao.service';
import { LoginService } from './../services/login.service';
import { OrderService } from './../services/order.service';
import { RestaurantsService } from './../services/restaurants.service';
import { ShoppingCartService } from './../services/shopping-cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { RadiusComponent } from './radius/radius.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ProcurarEnderecoComponent } from 'app/procurar-restaurante/procurar-endereco';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [RatingComponent, RadiusComponent, ProcurarEnderecoComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  exports: [ProcurarEnderecoComponent, RadiusComponent, RatingComponent, CommonModule, FormsModule, ReactiveFormsModule]

})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NotificacaoService,
        LoginService,
        ShoppingCartService,
        RestaurantsService,
        OrderService,
        LeaveOrderGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
    };
  }
}
