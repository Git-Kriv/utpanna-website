import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {API} from 'src/helpers/api';
import {DataService} from 'src/helpers/data.service';
import {project} from 'src/helpers/interfaces';
import {NavigateService} from 'src/helpers/navigate.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  loading = true;

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
  }

  call(id:string){
    this.dataService.FireGET<project>(API.Project + '/' + id).subscribe({
      next: (res) => {
        this.project = res;
      },
      complete: () => {
        this.loading = false;
        this.project.cover_image = this.HOST + this.project.cover_image;
        this.project.detail_image = this.HOST + this.project.detail_image;
        this.project.intro_image  = this.HOST + this.project.intro_image;
        this.project.outro_image  = this.HOST + this.project.outro_image;
      },
      error: (err) => {
        err.status == 404 ? this.router.navigate(['/work']) : err;
      }
    })    

  }

}
