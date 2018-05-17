import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string;
  tip: string;

  constructor(@Inject('auth') private auth: AuthService) {
    this.title = 'dottie';
  }

  ngOnInit() {
  }


  toSubmit(input) {
    console.log(input);
  }

  getInputValue(username, password) {
    console.log(username, password);
    const credentials = this.auth.loginWithCredentials(username, password);
    if (credentials) {
      this.tip = '认证成功';
    } else {
      this.tip = '认证失败';
    }
  }

}
