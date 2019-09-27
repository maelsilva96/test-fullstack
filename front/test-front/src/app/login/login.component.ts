import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public messageError: string;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const {value} = form;
    if (!value.email || !/\S+@\S+\.\S+/.test(value.email)) {
      this.messageError = 'E-mail inválido!';
    } else if (!value.password) {
      this.messageError = 'Senha inválida!';
    } else {
      this.messageError = '';
    }
  }
}
