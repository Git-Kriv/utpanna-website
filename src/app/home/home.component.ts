import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigateService } from 'src/helpers/navigate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickEventsubscription:Subscription;

  constructor(
    private navigationService: NavigateService,
  ) { 
    this.clickEventsubscription=this.navigationService.getClickEvent().subscribe((res)=>{
      this.inFocus(res);
      })
  }

  ngOnInit(): void {
  }

  inFocus(e:string){
    let ele = document.getElementById("Work");  
    console.log(ele);
    this.scrollInto(ele!);
  }
  scrollInto(ele:HTMLElement){
    ele?.scrollIntoView({
      behavior: 'smooth',
    });
  }

}
