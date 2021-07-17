import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // article:Article
  // article:Article
  @Input()
  article!: Article;
  constructor() {
    // this.article=new Article('Angular','http://angular.io',10);
   }
  voteUp():boolean{
    this.article.voteUp();
    return false
  }
  voteDown():boolean{
    this.article.voteDown();
    return false
  }
  ngOnInit(): void {
  }

}
