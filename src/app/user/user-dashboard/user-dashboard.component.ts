import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserToken } from 'src/app/models/userToken';
import { UserService } from 'src/app/services/user.service';
import { Subscription, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit, OnDestroy {
  
  ngOnDestroy() {
    this.userSubs.unsubscribe;
  }

  user: User
  userSubs: Subscription
  userToken: UserToken;

  constructor(
    private loginService: LoginService, 
    private router: Router
  ) { }

  ngOnInit() { 
    this.getUserData();
  }

  getUserData() {
    this.userSubs = this.loginService.verifyToken().subscribe(user => { 
      this.user = user;
    })
  }

  showMessage(){
    return 'You dont have characteres yet'
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login'])
  }

}
