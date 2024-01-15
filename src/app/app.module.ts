import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { ApproachComponent } from './home/approach/approach.component';
import { ArticleComponent } from './home/article/article.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './home/landing/landing.component';
import { OurPresenceComponent } from './home/our-presence/our-presence.component';
import { ServiceComponent } from './home/service/service.component';
import { WorkComponent } from './home/work/work.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ProjectsComponent } from './our-work/projects/projects.component';
import { ContactComponent } from './home/contact/contact.component';

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
    ContactComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
