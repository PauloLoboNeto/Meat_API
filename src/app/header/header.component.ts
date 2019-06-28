import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-header',
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private ls: LoginService) { }

  ngOnInit() { }

  deslogar() {
    this.ls.deslogar();
  }

  obterUsuarioLogado() {
    return this.ls.loginUser.name.toString();
  }

  logado(): boolean {
    return this.ls.logado();
  }

  logar() {
    this.ls.handleLogin();
  }
}
