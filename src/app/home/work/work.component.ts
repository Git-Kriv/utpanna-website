import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { API } from 'src/helpers/api';
import { DataService } from 'src/helpers/data.service';
import { project, projectList, selCategory } from 'src/helpers/interfaces';
import { NavigateService } from 'src/helpers/navigate.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  public projectList: project[] = [] as project[]
  public cat: selCategory = {} as selCategory 
  public project: project = {} as project
  prevSel: string = 'Transportation'
  index: number = 0
  length: number = 1;

  HOST = environment.HOST;

  constructor(
    private dataService:DataService,
    private router: Router,
    private naviagteService: NavigateService,
  ) { }

  ngOnInit(): void {
    this.cat.Transportation = true
    this.select('Transportation')
  }

  goToProject(id: string) {
    this.naviagteService.sendPage(id);
    this.router.navigate(['/project']);
  }

  changeProject(item: string) {
    switch (item) {
      case '-':
        if (this.index > 0) {
          this.index--;
          this.project = this.projectList[this.index];
        }
        break;
      case '+':
        if (this.index < this.length - 1) {
          this.index++;
          this.project = this.projectList[this.index];
        }
        break;
    }
  }

  select(category: string) {
    document.getElementById(this.prevSel)?.classList.remove('selected')
    this.prevSel = category
    this.cat.Transportation = false
    this.cat.Industrial = false
    this.cat.Retail = false
    this.cat.Branding = false
    this.cat.Packaging = false
    this.cat.UI = false
    switch (category) {
      case 'Transportation':
        this.cat.Transportation = !this.cat.Transportation
        document.getElementById('Transportation')?.classList.add('selected')
        this.getProjects(category)
        break;
      case 'Industrial':
        this.cat.Industrial = !this.cat.Industrial
        document.getElementById('Industrial')?.classList.add('selected')
        this.getProjects(category)
        break;
      case 'Retail':
        this.cat.Retail = !this.cat.Retail
        document.getElementById('Retail')?.classList.add('selected')
        this.getProjects(category)
        break;
      case 'Branding':
        this.cat.Branding = !this.cat.Branding
        document.getElementById('Branding')?.classList.add('selected')
        this.getProjects(category)
        break;
      case 'Packaging':
        this.cat.Packaging = !this.cat.Packaging
        document.getElementById('Packaging')?.classList.add('selected')
        this.getProjects(category)
        break;
      case 'UI':
        this.cat.UI = !this.cat.UI
        document.getElementById('UI')?.classList.add('selected')
        this.getProjects(category)
        break;
    
    }
  }

  getProjects(category: string) {
    this.projectList = [] as project[]
    this.index = 0
    this.dataService.FireGET<projectList>(API.ProjectAll).subscribe({
      next:(res) => {
        for (let i = 0; i < res.results.length; i++) {
          const ele = res.results[i];
          if (ele.category.includes(category)) {
            ele.short_image1 = this.HOST + ele.short_image1;
            this.projectList.push(ele);                    
          }
        } 
        if (this.projectList.length == 0){
          return;
        }       
      },
      error:(e) => {console.log(e);},
      complete:() => {
        this.length = this.projectList.length;
        this.project = this.projectList[0];
        console.log(this.project);
      }
    })
  }

}
