import { Component } from '@angular/core';
import { ArticleComponent } from '../../components/article/article.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleComponent, CommonModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  title:string = 'Bienvenue sur le wild blog de Eloïse';
  textColor:string= "black";

  notificationLikefromArticle:string="";

  HandlenotificationLikefromArticle(notification:string){
    this.notificationLikefromArticle =notification;
    console.log(this.notificationLikefromArticle);
  }

  changeColor(textColor:string):string{
    return this.textColor=textColor;
  }

  ArticlePublished(): boolean {
    return this.articles.some(article => article.isPublished);
  }
  articles = [
    { 
      id:1,
      title: 'Angular 16: Les nouveautés', 
      author: 'Alice', 
      content: 'Les nouveautés d\'Angular 16 incluent...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      comment: '', 
      likes: 120 
    },
    { 
      id:2,
      title: 'Développer une API REST', 
      author: 'Bob', 
      content: 'Développer une API REST nécessite...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      comment: '', 
      likes: 75 
    },
    { 
      id:3,
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
