import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleComponent } from './article.component';
import { provideRouter } from '@angular/router';
import { Article } from '../../models/article.models';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;

    // ✅ Initialisation de l'article avant le rendu
    component.article = {
      id: 1,
      title: 'Article test',
      content: 'Contenu test',
      likes: 0,
      isPublished: true
    } as Article;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle "publish" true or false', () => {
    // On commence avec isPublished = true
    expect(component.article.isPublished).toBeTrue();

    // Appel direct à la méthode, plus fiable qu’un clic sur le DOM
    component.togglePublication();
    expect(component.article.isPublished).toBeFalse();

    component.togglePublication();
    expect(component.article.isPublished).toBeTrue();
  });

  it('should display article from @Input()', () => {
    const mockArticle = {
      id: 1,
      title: 'Test Article',
      likes: 0,
      isPublished: true,
    } as Article;

    component.article = mockArticle;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const h1Element = compiled.querySelector('h1');
    expect(h1Element).toBeTruthy();
    expect(h1Element.textContent).toContain('Test Article');
  });

  it('should emit an event when button is clicked', () => {
    const mockArticle = {
      id: 1,
      title: 'Test Article',
      likes: 0,
      isPublished: true,
    } as Article;

    component.article = mockArticle;
    fixture.detectChanges();

    spyOn(component.notifyLike, 'emit');

    const button = fixture.nativeElement.querySelector('.buttonLike');
    button.click();

    expect(component.notifyLike.emit).toHaveBeenCalledWith(
      `L'article "Test Article" vient d'être liké`
    );
  });
});
