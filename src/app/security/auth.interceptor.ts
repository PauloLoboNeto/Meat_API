import { LoginService } from './../services/login.service';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable, Injector } from '@angular/core';
import { ConsumirApiCorreioService } from 'app/services/consumirApiCorreio.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginService = this.injector.get(LoginService);

    if (loginService.logado() && !req.url.startsWith('http://apps.widenet.com.br/busca-cep/api')) {
      const authRequest = req.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + loginService.loginUser.accessToken
        }
      });
      return next.handle(authRequest);
    } else {
      return next.handle(req);
    }
  }
}
