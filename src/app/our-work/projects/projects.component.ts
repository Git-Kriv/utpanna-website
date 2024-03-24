import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { API } from 'src/helpers/api';
import { DataService } from 'src/helpers/data.service';
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
    private dataService: DataService,
    private navigateService: NavigateService,
    private router: Router,
  ) { 
    this.navigateService.getClickEvent().subscribe((res) => {
      this.call(res);
    }
    )
  }

  ngOnInit(): void {
    if ( this.project == null) {
      this.router.navigate(['/work']);      
    } 
  }

  call(id:string){
    console.log(id);
    this.dataService.FireGET<project>(API.Project + '/' + id).subscribe({
      next: (res) => {
        this.project = {} as project;
        this.project = res;},
      error: (e) => console.log(e),
      complete: () => {
        this.project.short_image1 = this.HOST + this.project.short_image1;
        this.project.short_image2 = this.HOST + this.project.short_image2;
        this.project.long_image1  = this.HOST + this.project.long_image1;
        this.project.long_image2  = this.HOST + this.project.long_image2;
      },
    })

    console.log(this.project);
    

  }

}
