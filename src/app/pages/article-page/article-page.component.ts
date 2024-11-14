import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.models';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { ArticleDetailComponent } from '../../components/article-detail/article-detail.component';
import { ApiService } from '../../services/api.service';

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
  

  constructor(private apiService:ApiService,  private http: HttpClient, private route: ActivatedRoute) {
    
  }

  ngOnInit() { 
    this.route.paramMap.subscribe((params: ParamMap) => { 
      this.articleId = Number(params.get('id')); 
      this.article$ = this.apiService.getArticleById(this.articleId) 
  }); 
}

}
