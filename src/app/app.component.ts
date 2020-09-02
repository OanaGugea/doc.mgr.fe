import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppServices } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proiect';
  public isConnected = false;
  public subscription: Subscription;

  constructor(private service: AppServices) {
    this.subscription = this.service.getMessage().subscribe( () => {
      this.isConnected = true;
    }
    );
  }
}
