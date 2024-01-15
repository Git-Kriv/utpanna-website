import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ProjectsComponent } from './our-work/projects/projects.component';

const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full' },
  { path:'home', component:HomeComponent },
  { path:'work', component:OurWorkComponent },
  { path:'contact', component:ContactUsComponent },
  { path:'product', component:ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
