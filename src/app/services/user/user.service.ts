import { Injectable } from '@angular/core';

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
