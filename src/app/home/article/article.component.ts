import { Component, OnInit } from '@angular/core';
import { API } from 'src/helpers/api';
import { DataService } from 'src/helpers/data.service';
import { article } from 'src/helpers/interfaces';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public articleList:article[] = [] as article[]
  article1: article = {} as article;
  article2: article = {} as article;
  index: number = 0;


  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.getArticles(); 
  }

  async getArticles(){
    this.dataService.FireGET<article[]>(API.Articles).subscribe({
      next:(res) => {
        for (let i = 0; i < res.length; i++) {
          const ele = res[i];
          this.articleList.push(ele);
        }
        this.article1 = this.articleList[0];
        this.article2 = this.articleList[1];
      },
    })
  }

  goTo(url:string){
    window.open(url, '_blank');
  }

  nextPage(){
    var div = document.getElementById('articles');
    div!.classList.add('fade');
    if(this.index < this.articleList.length-2){
      this.index += 2;
      this.article1 = this.articleList[this.index];
      this.article2 = this.articleList[this.index+1];
      if(this.index+1 == this.articleList.length){
        this.article2 = this.articleList[0];
      }
    }
    else if(this.index == this.articleList.length-2){
      this.index = this.articleList.length-1;
      this.article1 = this.articleList[this.index];
      this.article2 = this.articleList[0];
    }
    else if(this.index == this.articleList.length-1){
      this.index = 0;
      this.article1 = this.articleList[this.index];
      this.article2 = this.articleList[this.index+1];  
    }
    setTimeout(() => {
      div?.classList.remove('fade');
    }, 500);
  }

  prevPage(){
    var div = document.getElementById('articles');
    div!.classList.add('fade');
    if(this.index > 0){
      this.index -= 2;
      this.article1 = this.articleList[this.index];
      this.article2 = this.articleList[this.index+1];
    }
    else if(this.index == 1){
      this.index = this.articleList.length-1;
      this.article1 = this.articleList[this.index];
      this.article2 = this.articleList[0];
    }
    else if(this.index == 0){
      this.index = this.articleList.length-2;
      this.article1 = this.articleList[this.index];
      this.article2 = this.articleList[this.index+1];
    }
    setTimeout(() => {
      div?.classList.remove('fade');
    }, 500);
  }

 
}
