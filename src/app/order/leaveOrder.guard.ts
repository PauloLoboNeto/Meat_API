import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "./order.component";

export class LeaveOrderGuard implements CanDeactivate<OrderComponent>{

  canDeactivate(orderC: OrderComponent,
    activatedRoute: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot): boolean {
    if (!orderC.isOrderCompleted()) {
      return window.confirm('Deseja desistir da compra?')
    } else {
      return true;
    }
  }
}
