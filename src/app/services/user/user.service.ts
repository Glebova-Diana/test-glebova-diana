import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userRole = 'user';

  constructor() { }

  public setRole(role) {
    this.userRole = role;
  }
}
