import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public messageError = '';
  public buttonDisabled = false;
  public success = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const {value} = form;
    if (this.formValid(value)) {
      this.buttonDisabled = true;
      this.authService.createUserAndAuth(value.name, value.email, value.password).then(() => {
        this.success = true;
        this.buttonDisabled = true;
        this.router.navigateByUrl('/');
      }, (error) => {
        this.success = false;
        this.buttonDisabled = false;
        this.messageError = error;
      });
    }
  }

  private formValid(value): boolean {
    if (value.name === '' || value.name === undefined) {
      this.messageError = 'Nome inválido!';
      return false;
    } else if (!/\S+@\S+\.\S+/.test(value.email)) {
      this.messageError = 'E-mail inválido!';
      return false;
    } else if (value.password === '' || value.password === undefined) {
      this.messageError = 'Senha inválido!';
      return false;
    }
    return true;
  }

}
