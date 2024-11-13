import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Article } from '../../models/article.models';

@Component({
  selector: 'app-article-detail-component',
  standalone: true,
  imports: [FormsModule,RouterLink,CommonModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss'
})


export class ArticleDetailComponent {
textColor:string= "black";
@Input() article!: Article

@Output() notifyLike :EventEmitter<string> = new EventEmitter<string>();


handleClickLikeArticle(){
  this.article.likes+=1;
  this.notifyLike.emit((`L'article "${this.article.title}" vient d'être liké`));
}

changeColor(textColor:string):string{
  return this.textColor=textColor;
}

togglePublication(): void {
  this.article.isPublished = !this.article.isPublished;
}
};




