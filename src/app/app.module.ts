import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { SalesComponent } from './components/sales/sales.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MessagesComponent } from './components/messages/messages.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ObservationsComponent } from './components/observations/observations.component'
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AppServices } from './services/common.service';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { OceanTableComponent } from './common/ocean-table/ocean-table.component';
import { OceanNoteComponent } from './common/ocean-note/ocean-note.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabMenuModule } from 'primeng/tabmenu';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginServices } from './services/login.services';
import {AccordionModule} from 'primeng/accordion';
import { ClientComponent } from './components/client/client.component';
import { OceanAccordionComponent } from './common/ocean-accordion/ocean-accordion.component';
import { OceanDropdownComponent } from './common/ocean-dropdown/ocean-dropdown.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';

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
    HomeComponent,
    ClientComponent,
    OceanAccordionComponent,
    OceanDropdownComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ProgressBarModule,
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
    RouterModule.forRoot([
      { path: 'vanzari', component: SalesComponent },
      { path: 'colectari', component: CollectionsComponent },
      { path: 'observatii', component: ObservationsComponent },
      { path: 'mesaje', component: MessagesComponent },
      { path: 'adauga-companie', component: AddCompanyComponent },
      { path: 'activitate', component: ActivityComponent },
      { path:'client',component: ClientComponent},
      { path: '**', component: HomeComponent },
    ]),
    TableModule,
    AccordionModule,
    NgbModule,
    TabMenuModule,
    HttpClientModule,
    DropdownModule,
    InputSwitchModule,
    ButtonModule
  ],
  providers: [AppServices, LoginServices],
  bootstrap: [AppComponent],
})
export class AppModule { }
