import { Component } from '@angular/core';
import { Article } from '../../models/article.models';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleComponent,AsyncPipe],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {
  articles$ : Observable<Article[]>;

  notificationLikefromArticle:string="";

  

  HandlenotificationLikefromArticle(notification:string){
    this.notificationLikefromArticle =notification;
    console.log(this.notificationLikefromArticle);
  }

  constructor(private http: HttpClient) {
    this.articles$=this.http.get<Article[]>('http://localhost:3000/articles').pipe(
      map((data) => data.filter(article => article.isPublished===true)));
    ;
  }
}
