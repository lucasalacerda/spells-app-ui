import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input('title') titleName: string;
  auth: LoginService;

  isLogged() {
    if(localStorage.getItem('id_token') != null) {
      return true;
    }
    return false;
  } 

  constructor() { }

  ngOnInit() {
  }

}
