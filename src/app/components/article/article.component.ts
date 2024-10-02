import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Article } from '../../models/article.models';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule,RouterLink,CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  textColor:string= "black";
  
@Input() article: Article={
  id:0,
  title: '', 
  author: '', 
  content: '', 
  image: '',
  isPublished: true, 
  comment: '', 
  likes: 0 
}

changeColor(textColor:string):string{
  return this.textColor=textColor;
}

togglePublication(): void {
  this.article.isPublished = !this.article.isPublished;
}
};




