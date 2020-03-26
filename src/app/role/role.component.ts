import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user/user.service';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
  }

  setRole(event) {
    this.userService.setRole(event.target.value);
  }

}
