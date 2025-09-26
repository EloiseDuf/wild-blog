import { Component, inject } from '@angular/core';
import { ArticleComponent } from '../../components/article/article.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {map, Observable, isEmpty } from 'rxjs';
import { Article } from '../../models/article.models';
import { HttpClient } from '@angular/common/http';
import { ArticleListComponent } from '../../components/article-list/article-list.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ArticleListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {

  private authService =inject(AuthService);
  role: string = '';
  isAuthenticated: boolean = false;
  title:string = 'Bienvenue sur le wild blog de Eloïse';
  textColor:string= "black";

  changeColor(textColor:string):string{
    return this.textColor=textColor;
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
  }

  verifyAuthenticated(): void{
    this.isAuthenticated=this.authService.isLoggedIn();
  }

  getUserRole(): void {
    this.role = this.authService.getUserRole() ?? ''; 
  }

  ngOnInit(): void {
    this.verifyAuthenticated();
    this.getUserRole();
  }

}
