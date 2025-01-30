import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {HomeComponent} from './home/home.component';
import {LoaderComponent} from './loader/loader.component';
import {OurWorkComponent} from './our-work/our-work.component';
import {ProjectsComponent} from './our-work/projects/projects.component';
import {PrivacyComponent} from './privacy/privacy.component';

const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full' },
  { path: 'home', component:HomeComponent },
  { path: 'work', component:OurWorkComponent },
  { path: 'contact', component:ContactUsComponent },
  { path: 'project', component:ProjectsComponent },
  { path: 'privacy', component:PrivacyComponent },
  { path: 'load', component:LoaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
