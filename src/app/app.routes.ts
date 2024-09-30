import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [ 
    {path:'', component:HomePageComponent },
    {path: 'article/:id', component: ArticlePageComponent},
    {path: '**', component: NotFoundComponent }
];
