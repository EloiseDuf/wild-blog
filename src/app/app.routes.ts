import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { roleGuard } from './guards/role.guard';
import { visitorOnlyGuard } from './guards/visitor-only.guard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [ 
    {
        path:'', 
        component:HomePageComponent
    },

    {
        path: 'article/:id',
        component: ArticlePageComponent
    },

    {
        path:'contact',
        component : ContactFormComponent
    },

    {
        path:'login',
        component : LoginFormComponent,
        canActivate: [visitorOnlyGuard]
    },

    {
        path:'profile',
        component : ProfilComponent,
        canActivate:[authGuard]
    },
    
    {
        path: 'admin',
        component: AdminPageComponent,
        canActivate: [roleGuard('ADMIN')]
    },

    {
        path:'register',
        component : RegisterFormComponent,
        canActivate: [visitorOnlyGuard]
    },

    {
        path: '**',
        component: NotFoundComponent 
    },
];
