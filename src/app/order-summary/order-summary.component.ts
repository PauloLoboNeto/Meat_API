import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order-summary',
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {
  rated: boolean

  constructor(private ls: LoginService) { }

  ngOnInit() {
  }

  rate(){
    this.rated = true;
  }

  obterUsuarioLogado(){
    return this.ls.loginUser.name.toString();
  }
}
