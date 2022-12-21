import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './modules/hero/hero.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { AboutComponent } from './modules/about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PortfolioComponent,
    ContactsComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
