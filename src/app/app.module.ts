import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import { MatTabsModule } from "@angular/material/tabs";
import { MatListModule } from "@angular/material/list";
import { SalesComponent } from "./components/sales/sales.component";
import { HomeComponent } from './components/home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MessagesComponent } from './components/messages/messages.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ObservationsComponent } from './components/observations/observations.component'
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AppServices } from './services/common.service';



@NgModule({
  declarations: [AppComponent,
    NavbarComponent,
    SalesComponent,
    HomeComponent,
    CollectionsComponent,
    ObservationsComponent,
    AddCompanyComponent,
    MessagesComponent,
    ActivityComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: 'vanzari', component: SalesComponent },
      { path: 'colectari', component: CollectionsComponent },
      { path: 'observatii', component: ObservationsComponent },
      { path: 'mesaje', component: MessagesComponent },
      { path: 'adauga-companie', component: AddCompanyComponent },
      { path: 'activitate', component: ActivityComponent },
      { path: '**', component: HomeComponent },
    ]),
  ],
  providers: [AppServices],
  bootstrap: [AppComponent],
})
export class AppModule { }
