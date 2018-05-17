import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  loginWithCredentials(username: string, password: string): boolean {
    if (username === 'dottie' && password.length <= 8) {
      return true;
    }
    return false;
  }

}
