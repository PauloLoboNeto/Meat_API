import { HttpClient } from '@angular/common/http';
import { MEAT_API } from './../../../app.api';
import { LoginModel } from './../login/Login.model';
import { Observable } from 'rxjs/Observable';
import { CanActivate, CanLoad, Route, Router, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationEnd } from "@angular/router";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Injectable()
export class LoginService implements CanActivate, CanLoad {
  loginUser: LoginModel;
  lastUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.router.events.filter(e => e instanceof NavigationEnd)
      .subscribe((e: NavigationEnd) => {
        this.lastUrl = e.url;
      });
  }

  checkAuthentication(path: string): boolean {
    const loggedIn = this.logado();
    if (!loggedIn) {
      this.handleLogin(`/${path}`);
    }
    return loggedIn;
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    return this.checkAuthentication(activatedRoute.routeConfig.path);
  }

  canLoad(route: Route): boolean {
    return this.checkAuthentication(route.path);
  }

  handleLogin(path: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(path)]);
  }

  logado(): boolean {
    return this.loginUser !== undefined;
  }

  deslogar() {
    this.loginUser = undefined;
  }

  login(email: String, password: String): Observable<LoginModel> {
    return this.http.post<LoginModel>(`${MEAT_API}/login`, { email: email, password: password })
      .do(user => this.loginUser = user);
  }
}
