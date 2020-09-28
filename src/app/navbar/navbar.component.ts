import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginServices } from '../services/login.services';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public isConnected = false;
  constructor(private service: LoginServices) {
  }

  ngOnInit(): void { }

  public logoutAndRefreshPage(): void {
    window.location.href = '/';
    this.service.sendLogoutMessage();
  }
}
