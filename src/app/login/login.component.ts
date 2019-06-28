import { ActivatedRoute, Router } from '@angular/router';
import { NotificacaoService } from './../services/notificao.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginModel } from './login.model';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  navigateTo: string;
  formGroup: FormGroup;
  loginModel: LoginModel = new LoginModel();

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private ls: LoginService,
    private fb: FormBuilder,
    private notifyServ: NotificacaoService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    });
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/');
  }

  login() {
    this.ls.login(this.formGroup.value.email,
      this.formGroup.value.password)
      .subscribe(res =>
        this.notifyServ.notify(`Bem vindo, ${res.name}`),
        response =>
          this.notifyServ.notify(JSON.parse(response._body).message),
        () => {
          this.router.navigate([atob(this.navigateTo)]);
        });
  }
}
