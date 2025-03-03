import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {API} from 'src/helpers/api';
import {DataService} from 'src/helpers/data.service';
import {project, projectList} from 'src/helpers/interfaces';
import {NavigateService} from 'src/helpers/navigate.service';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css']
})
export class OurWorkComponent implements OnInit {
  loading:boolean = true;

  public projects:project[] = [] as project[];
  prevSel:string = 'All';
  currCat:string = 'All';
  nextPage:number = 1;

  HOST = environment.HOST;

  constructor(
    private dataService:DataService,
    private router: Router,
    private naviagteService: NavigateService,
  ) { }

  ngOnInit(): void {
    this.populate();
  }

  populate(){
    document.getElementById('All')?.classList.add('selected');
    this.dataService.FireGET<projectList>(API.ProjectAll).subscribe({
      next:(res) => {
        this.loading = false;
        this.nextPage++;        
        for (let i = 0; i < res.results.length; i++) {
          res.results[i].cover_image = this.HOST + res.results[i].cover_image;
          this.projects.push(res.results[i]);
        }        
      },
    })
  }

  goToProject(id: string) {
    this.naviagteService.sendPage(id);
    this.router.navigate(['/project']);
    // this.dataService.FireGET<project>(API.Project + '/' + id).subscribe({
    //   next: (res) => {
    //     this.naviagteService.sendPage(res);
    //   },
    //   error: (e) => console.log(e),
    //   complete: () => {
    //     this.router.navigate(['/project']);
    //   },
    // })
  }

  filter(cat:string){
    this.currCat = cat;
    if (cat === this.prevSel) {
      return;
    }
    this.loading = true;
    switch (cat) {
      case 'All':
        this.populate();
        break;
      case 'Transportation':
        cat = 'Transportation Design';
        break;
      case 'Industrial':
        cat = 'Industrial Design';
        break;
      case 'Retail':
        cat = 'Retail Space Design';
        break;
      case 'Packaging':
        cat = 'Packaging Design';
        break;
      case 'Branding':
        cat = 'Branding and Identity Design';
        break;
      case 'UI/UX':
        cat = 'UI/UX Design';
        break;
    }
    document.getElementById(this.prevSel)?.classList.remove('selected');
    document.getElementById(this.currCat)?.classList.add('selected');
    this.prevSel = this.currCat;
    this.projects = [] as project[];
    this.dataService.FireGETP<project[]>(API.ProjectFilter, {category:cat}).subscribe({
      next:(res) => {
        this.loading = false;
        for (let i = 0; i < res.length; i++) {
          res[i].cover_image = this.HOST + res[i].cover_image;
          this.projects.push(res[i]);
        }
      },
    })
  }

  loadMore(){
    this.dataService.FireGETP<projectList>(API.ProjectAll, {page:this.nextPage}).subscribe({
      next:(res) => {
        this.nextPage++;
        for (let i = 0; i < res.results.length; i++) {
          res.results[i].cover_image = this.HOST + res.results[i].cover_image;
          this.projects.push(res.results[i]);
        }
      },

    })
  }

}
