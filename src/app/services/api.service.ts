import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article } from '../models/article.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  private apiUrl="http://localhost:8080/";

  getArticles():Observable<Article[]>{
    return this.http.get<Article[]>(`${this.apiUrl}articles`);
  }

  getArticleById(id: number): Observable<Article> { 
    return this.http.get<Article>(`${this.apiUrl}articles/${id}`);
  }
}
