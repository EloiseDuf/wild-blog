import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { Article } from '../models/article.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  private baseUrl = environment.apiUrl;

  getArticles():Observable<Article[]>{
    return this.http.get<Article[]>(`${this.baseUrl}articles`);
  }

  getArticleById(id: number): Observable<Article> { 
    return this.http.get<Article>(`${this.baseUrl}articles/${id}`);
  }
}
