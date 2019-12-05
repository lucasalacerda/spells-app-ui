import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserToken } from 'src/app/models/userToken';
import { UserService } from 'src/app/services/user.service';
import { Subscription, of } from 'rxjs';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit, OnDestroy {

  user: User
  userSubs: Subscription
  userToken: UserToken;

  constructor(
    private userService: UserService,
    private loginService: LoginService, 
    private router: Router
  ) { }

  ngOnInit() { 
    this.getUserData();
  }

  ngOnDestroy() {
    this.userSubs.unsubscribe;
  }

  getUserData() {
    this.userSubs = this.loginService.verifyToken().subscribe(token => { 
      token = new UserToken(token.id, token.iat, token.exp); 
      this.userService.getUserById(token.id).subscribe(user => this.user = user)
    });
  }

  showMessage(){
    return 'You dont have characteres yet'
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login'])
  }

}
