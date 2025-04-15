import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailComponent } from './article-detail.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ActivatedRoute, provideRouter } from '@angular/router';

describe('ArticleDetails', () => {
  let component: ArticleDetailComponent;
  let fixture: ComponentFixture<ArticleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleDetailComponent],
      providers: [provideRouter([]),provideHttpClient()]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
