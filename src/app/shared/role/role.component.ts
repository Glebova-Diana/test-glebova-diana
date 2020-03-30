import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(
    public userService: UserService,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  setRole(event) {
    this.userService.setRole(event.target.value);
    this.checkRole();
  }

  checkRole() {
    if ( (this.userService.userRole === 'user' && this.router.url === '/edit') ||
      ((this.userService.userRole === 'user' || 'owner') && this.router.url === '/newProduct') ) {
      this.router.navigate(['/list']);
    }
  }

  changeRoute() {
    if (this.router.url === '/list') {
      this.router.navigate(['/newProduct']);
    } else {
      this.router.navigate(['/list']);
    }
  }
}
