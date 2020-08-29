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
import { VanzariComponent } from "./components/vanzari/vanzari.component";
import { HomeComponent } from './components/home/home.component';
import { ColectariComponent } from './components/colectari/colectari.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ClientDialogComponent } from './components/client-dialog/client-dialog.component';
import { ObservatiiComponent } from './components/observatii/observatii.component';
import { AdaugaCompanieComponent } from './components/adauga-companie/adauga-companie.component';
import { MesajeComponent } from './components/mesaje/mesaje.component';
import { ActivitateComponent } from './components/activitate/activitate.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, VanzariComponent, HomeComponent, ColectariComponent, ClientDialogComponent, ObservatiiComponent, AdaugaCompanieComponent, MesajeComponent, ActivitateComponent],
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
      {path: 'vanzari', component: VanzariComponent},
      {path: 'colectari', component: ColectariComponent},
      {path: 'observatii',component:ObservatiiComponent},
      {path: 'mesaje',component:MesajeComponent},
      {path:'adauga-companie',component:AdaugaCompanieComponent},
      {path: 'activitate', component:ActivitateComponent},
      {path: '**', component: HomeComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
