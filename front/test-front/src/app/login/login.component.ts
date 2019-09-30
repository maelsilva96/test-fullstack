import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public messageError = '';
  public buttonDisabled = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const {value} = form;
    if (this.formValid(value)) {
      this.buttonDisabled = true;
      this.authService.authUser(value.email, value.password).then(() => {
        this.buttonDisabled = false;
        this.router.navigateByUrl('/');
      }).catch((error) => {
        this.buttonDisabled = false;
        this.messageError = error;
      });
    }
  }

  private formValid(value): boolean {
    if (!/\S+@\S+\.\S+/.test(value.email)) {
      this.messageError = 'E-mail inválido!';
      return false;
    } else if (value.password === '' || value.password === undefined) {
      this.messageError = 'Senha inválido!';
      return false;
    }
    return true;
  }
}
