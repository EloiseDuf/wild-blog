import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Article } from '../../models/article.models';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { ArticleDetailComponent } from '../../components/article-detail/article-detail.component';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ArticleDetailComponent, AsyncPipe],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {

  articleId!: number;
  @Input() article$! : Observable<Article>;
  

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    
  }

  ngOnInit() { 
    this.route.paramMap.subscribe((params: ParamMap) => { 
      this.articleId = Number(params.get('id')); 
      if (this.articleId) { 
        this.article$ = this.getArticleById(this.articleId).pipe( 
          map(articles => { const article = articles[0]; 
            return article; 
          })
          
     ); 
    } 
  }); 
}

  getArticleById(id: number): Observable<Article[]> { 
    return this.http.get<Article[]>(`http://localhost:3000/articles?id=${id}`);
  }
}
