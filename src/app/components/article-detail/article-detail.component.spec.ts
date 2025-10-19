import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleDetailComponent } from './article-detail.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { Article } from '../../models/article.models';

describe('ArticleDetails', () => {
  let component: ArticleDetailComponent;
  let fixture: ComponentFixture<ArticleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleDetailComponent],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleDetailComponent);
    component = fixture.componentInstance;

    // ✅ Initialisation avant le rendu
    component.article = {
      id: 1,
      title: 'Titre test',
      content: 'Contenu test',
      likes: 0,
      isPublished: false
    } as Article;

    fixture.detectChanges(); // on rend après avoir injecté l’article
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
