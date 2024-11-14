import { Component } from '@angular/core';
import { Article } from '../../models/article.models';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ArticleComponent } from '../article/article.component';
import { ApiService } from '../../services/api.service';

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

   constructor(private apiService:ApiService,  private http: HttpClient) {
    this.articles$=this.apiService.getArticles();
   }

}
