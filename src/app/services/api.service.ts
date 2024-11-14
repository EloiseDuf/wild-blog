import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article } from '../models/article.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  private apiUrl="http://localhost:3000/articles";

  getArticles(){
    return this.http.get<Article[]>(`${this.apiUrl}`).pipe(
      map((data) => data.filter(article => article.isPublished===true)));
  }

  getArticleById(id: number): Observable<Article> { 
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }



}
