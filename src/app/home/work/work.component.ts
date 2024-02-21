import { Component, OnInit } from '@angular/core';
import { API } from 'src/helpers/api';
import { DataService } from 'src/helpers/data.service';
import { project, projectList, selCategory } from 'src/helpers/interfaces';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  public projectList: project[] = [] as project[]
  public cat: selCategory = {} as selCategory 
  prevSel: string = 'Transportation'

  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.cat.Transportation = true
    document.getElementById('Transportation')?.classList.add('selected')
    this.dataService.FireGET<projectList>(API.ProjectAll).subscribe({
      next:(res) => {
        for (let i = 0; i < res.results.length; i++) {
          const ele = res.results[i];
          this.projectList.push(ele);                    
        }
      },
      error:(e) => {console.log(e);
      }
    })
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
    this.dataService.FireGET<projectList>(API.ProjectAll).subscribe({
      next:(res) => {
        console.log(res.results);
        for (let i = 0; i < res.results.length; i++) {
          const ele = res.results[i];
          if (ele.category === category) {
            this.projectList.push(ele);                    
          }
        }
      },
      error:(e) => {console.log(e);
      }
    })
  }

}
