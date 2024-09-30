import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

export const routes: Routes = [ 
    {path:'', component:HomePageComponent },
    {path: 'article/:id', component: ArticlePageComponent},
    {path:'contact', component : ContactFormComponent},
    {path: '**', component: NotFoundComponent },

];
