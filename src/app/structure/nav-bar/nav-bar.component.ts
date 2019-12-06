import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input('title') titleName: string;

  constructor(
    private loginService: LoginService,
    private route: Router
    ) { }

  currentUrl: string;

  ngOnInit() {
    this.showSearch();
  }

  showSearch() {
    if(this.route.url === "/spells-list") return true
    return false
    
  }
  

}
