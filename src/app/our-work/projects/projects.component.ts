import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { project } from 'src/helpers/interfaces';
import { NavigateService } from 'src/helpers/navigate.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  project:project = {} as project;

  HOST = environment.HOST;

  constructor(
    private navigateService: NavigateService,
    private router: Router,
  ) { 
    this.navigateService.getClickEvent().subscribe((res) => {
      this.project = res;      
      this.project.short_image1 = this.HOST + this.project.short_image1;
      this.project.short_image2 = this.HOST + this.project.short_image2;
      this.project.long_image1 = this.HOST + this.project.long_image1;
      this.project.long_image2 = this.HOST + this.project.long_image2;
    })
  }

  ngOnInit(): void {
    if ( this.project == null) {
      this.router.navigate(['/work']);      
    }
  }

}
