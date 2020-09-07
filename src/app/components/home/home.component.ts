import { Component, OnInit } from '@angular/core';
import { AppServices } from 'src/app/services/common.service';
import {Login} from 'src/app/models/login';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  focus;
  focus1;
  public pass:string='';
  public email:string='';
  public login:any;
  constructor(private service: AppServices) { }

  ngOnInit(): void {
    this.login=new Login('','');
  }

  public conecting() {
    console.log('Email:'+this.login.email);
    console.log('Password:'+this.login.password);
    this.service.sendMessage();
  }
}
