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
    OurPresenceComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
