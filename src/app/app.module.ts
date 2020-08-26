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

@NgModule({
  declarations: [AppComponent, NavbarComponent, VanzariComponent, HomeComponent, ColectariComponent],
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
    RouterModule.forRoot([
      {path: 'vanzari', component: VanzariComponent},
      {path: 'colectari', component: ColectariComponent},
      {path: '**', component: HomeComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
