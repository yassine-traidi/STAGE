import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showLoadingBar = false;
  isNavbarCollapsed = true;

  constructor(private router:Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showLoadingBar = true;
      } else if (event instanceof NavigationEnd) {
        this.showLoadingBar = false;
      }
    });
  }

  toggleNavbarCollapse() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
