import { Component, OnInit } from '@angular/core';
import { AppServices } from 'src/app/services/common.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  focus;
  focus1;
  public pass = 'aaa';
  public email = 'emi';
  constructor(private service: AppServices) { }

  ngOnInit(): void {
  }

  public conecting() {
    this.service.sendMessage();
  }
}
