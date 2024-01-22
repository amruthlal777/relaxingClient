import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AboutModalComponent } from './modal/about-modal/about-modal.component';
import { ContactModalComponent } from './modal/contact-modal/contact-modal.component';
import { PortfolioModalComponent } from './modal/portfolio-modal/portfolio-modal.component';
import { LivingSpacesComponent } from './living-spaces/living-spaces.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { OfficeComponent } from './office/office.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ServiceModalComponent } from './modal/service-modal/service-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutModalComponent,
    ContactModalComponent,
    PortfolioModalComponent,
    LivingSpacesComponent,
    KitchenComponent,
    OfficeComponent,
    CommercialComponent,
    ServiceModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
