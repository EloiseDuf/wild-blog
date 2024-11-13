import { Component } from '@angular/core';
import { ArticleComponent } from '../../components/article/article.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {map, Observable, isEmpty } from 'rxjs';
import { Article } from '../../models/article.models';
import { HttpClient } from '@angular/common/http';
import { ArticleListComponent } from '../../components/article-list/article-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleComponent, CommonModule, RouterLink, AsyncPipe, ArticleListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  title:string = 'Bienvenue sur le wild blog de Eloïse';
  textColor:string= "black";

  changeColor(textColor:string):string{
    return this.textColor=textColor;
  }

}
