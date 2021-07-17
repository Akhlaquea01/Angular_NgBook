import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles:Article[];
  title = 'NgBookProject1';
  constructor(){
    this.articles=[
      new Article('Angular','http://www.angular.io',3),
      new Article('Angular','http://www.angular.io',8),
      new Article('Angular','http://www.angular.io',2),
    ];
  }
  addArticle(title:HTMLInputElement, link: HTMLInputElement):boolean{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value,link.value,0));
    title.value='';
    link.value='';
    return false;
  }
  sortedArticles():Article[]{
    return this.articles.sort((a:Article,b:Article)=>b.votes - a.votes)
  }
}
