import { LeaveOrderGuard } from './leaveOrder.guard';
import { SharedModule } from './../shared/shared.module';
import { DeliveryCostsComponent } from './../delivery-costs/delivery-costs.component';
import { OrderItensComponent } from './order-itens/order-itens.component';
import { OrderComponent } from './order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: '', canDeactivate: [LeaveOrderGuard], component: OrderComponent }
]

@NgModule({
  declarations: [OrderComponent, OrderItensComponent, DeliveryCostsComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule { }
