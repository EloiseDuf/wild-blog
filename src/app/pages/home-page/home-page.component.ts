import { Component } from '@angular/core';
import { ArticleComponentComponent } from '../../components/article-component/article-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleComponentComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  title:string = 'Bienvenue sur le wild blog de Eloïse';
  textColor:string= "black";

  changeColor(textColor:string):string{
    return this.textColor=textColor;
  }

  ArticlePublished(): boolean {
    return this.articles.some(article => article.isPublished);
  }
  articles = [
    { 
      title: 'Angular 16: Les nouveautés', 
      author: 'Alice', 
      content: 'Les nouveautés d\'Angular 16 incluent...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      comment: '', 
      likes: 120 
    },
    { 
      title: 'Développer une API REST', 
      author: 'Bob', 
      content: 'Développer une API REST nécessite...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: false, 
      comment: '', 
      likes: 75 
    },
    { 
      title: 'Pourquoi TypeScript est essentiel ?', 
      author: 'Charlie', 
      content: 'TypeScript apporte de la robustesse...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      comment: '', 
      likes: 300 
    }
  ];
}
