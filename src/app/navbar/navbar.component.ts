import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigateService } from 'src/helpers/navigate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  prevPage:string = "Home";

  linkedinURL: string = "../../assets/navbar/linkedin-in.svg";
  twitterURL: string = "../../assets/navbar/twitter.svg";
  fbURL: string = "../../assets/navbar/facebook.svg";
  instaURL: string = "../../assets/navbar/instagram.svg";

  constructor(
    private navigationService: NavigateService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    document.getElementById("Home")!.classList.add("selected");
  }

  navigate(page:string){
    document.getElementById(this.prevPage)!.classList.remove("selected");
    this.prevPage = page;
    this.navigationService.sendPage(page);    
    document.getElementById(page)!.classList.add("selected");
  }

  redirect(page:string){
    document.getElementById(this.prevPage)!.classList.remove("selected");
    this.prevPage = page;
    document.getElementById(page)!.classList.add("selected");
    page = page.toLowerCase();
    this.router.navigate([page]);    
  }

  hoverIn(e: any){
   switch(e){
    case 'linkedin':
      this.linkedinURL = "../../assets/navbar/awesome-linkedin.svg";
      break;
    case 'twitter':
      this.twitterURL = "../../assets/navbar/awesome-twitter.png";
      break;
    case 'fb':
      this.fbURL = "../../assets/navbar/awesome-facebook.svg";
      break;
    case 'insta':
      this.instaURL = "../../assets/navbar/awesome-instagram.svg";
      break;

   }
  }

  
  hoverOut(e: any){
    switch(e){
     case 'linkedin':
       this.linkedinURL = "../../assets/navbar/linkedin-in.svg";
       break;
     case 'twitter':
       this.twitterURL = "../../assets/navbar/twitter.svg";
       break;
     case 'fb':
       this.fbURL = "../../assets/navbar/facebook.svg";
       break;
     case 'insta':
       this.instaURL = "../../assets/navbar/instagram.svg";
       break;
 
    }
   }

}
