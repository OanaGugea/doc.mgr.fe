import { Component, OnInit } from "@angular/core";
import { AppServices } from "src/app/services/common.service";
import { Login } from "src/app/models/login";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  private pass: string = "";
  private email: string = "";
  public login: any;

  constructor(private service: AppServices) {}

  ngOnInit(): void {
    this.login = new Login("", "");
  }

  public conecting(): void {
    console.log("Email:" + this.login.email);
    console.log("Password:" + this.login.password);
    this.service.sendMessage(this.login.email, this.login.password);
  }
}
