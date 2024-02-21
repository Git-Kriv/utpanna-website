import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  textList:string[] = ["a Product","an Industrial", "an UI/UX", "an Automotive", "a Packaging" ]
  varText:string = this.textList[0]
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loop();
  }

  loop() {
    for (let i = 0; i < this.textList.length; i++) {
      setTimeout(() => {
        this.varText = this.textList[i];
      }, 2000 * i);
      if (i === this.textList.length - 1) {
        setTimeout(() => {
          this.loop();
        }, 2000 * i + 2000);
      }
    }
  }

  redirect(url:string){
    this.router.navigate([url]);
  }

}
