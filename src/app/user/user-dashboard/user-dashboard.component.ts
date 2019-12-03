import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(
    private loginService: LoginService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/')
  }

}
