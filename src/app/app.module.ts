import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/helpers/data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { ApproachComponent } from './home/approach/approach.component';
import { ArticleComponent } from './home/article/article.component';
import { ClientsComponent } from './home/clients/clients.component';
import { ContactComponent } from './home/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './home/landing/landing.component';
import { OurPresenceComponent } from './home/our-presence/our-presence.component';
import { ServiceComponent } from './home/service/service.component';
import { WorkComponent } from './home/work/work.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ProjectsComponent } from './our-work/projects/projects.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ContactUsComponent,
    LandingComponent,
    ApproachComponent,
    WorkComponent,
    ServiceComponent,
    ArticleComponent,
    AboutUsComponent,
    OurPresenceComponent,
    OurWorkComponent,
    ProjectsComponent,
    ContactComponent,
    PrivacyComponent,
    ClientsComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
