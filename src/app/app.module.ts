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
import { MatDialogModule } from '@angular/material/dialog';
import { MessagesComponent } from './components/messages/messages.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ObservationsComponent } from './components/observations/observations.component'
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AppServices } from './services/common.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Login } from './models/login';
import {ProgressBarModule} from 'primeng/progressbar';
import {TableModule} from 'primeng/table';
import { OceanTableComponent } from './common/ocean-table/ocean-table.component';
import { OceanNoteComponent } from './common/ocean-note/ocean-note.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TabMenuModule} from 'primeng/tabmenu';
import { AddUsersComponent } from './components/add-users/add-users.component';
import {DropdownModule} from 'primeng/dropdown';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginServices } from './services/login.services';
import { OceanTabsComponent } from './common/ocean-tabs/ocean-tabs.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SalesComponent,
    LoginComponent,
    CollectionsComponent,
    ObservationsComponent,
    AddCompanyComponent,
    MessagesComponent,
    ActivityComponent,
    OceanTableComponent,
    OceanNoteComponent,
    AddUsersComponent,
    HomeComponent,
    OceanTabsComponent

  ],
  imports: [
    InputTextModule,
    TabViewModule,
    BrowserModule,
    ProgressBarModule,
    ButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    PasswordModule,
    RouterModule.forRoot([
      {path:'add-user',component:AddUsersComponent},
      { path: 'vanzari', component: SalesComponent },
      { path: 'colectari', component: CollectionsComponent },
      { path: 'observatii', component: ObservationsComponent },
      { path: 'mesaje', component: MessagesComponent },
      { path: 'adauga-companie', component: AddCompanyComponent },
      { path: 'activitate', component: ActivityComponent },
      { path: '**', component: HomeComponent },
    ]),
    TableModule,
    NgbModule,
    TabMenuModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [AppServices, LoginServices],
  bootstrap: [AppComponent],
})
export class AppModule { }
