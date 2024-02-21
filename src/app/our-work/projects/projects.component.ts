import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { project } from 'src/helpers/interfaces';
import { NavigateService } from 'src/helpers/navigate.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  project:project = {} as project;

  constructor(
    private navigateService: NavigateService,
    private router: Router,
  ) { 
    this.navigateService.getClickEvent().subscribe((res) => {
      this.project = res;      
    })
  }

  ngOnInit(): void {
    if ( this.project == null) {
      this.router.navigate(['/work']);      
    }
  }

}
