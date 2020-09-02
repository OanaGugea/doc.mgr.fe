import { Component, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
import { AppServices } from '../services/common.service';

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {}
}
