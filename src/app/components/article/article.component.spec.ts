import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should toggle "publish" on each button click',()=>{
  //   const compiled =fixture.nativeElement;
  //   const button=compiled.querySelector('button');

  //   const wasVisible=!!compiled.querySelector('.cardContener');


  //   button.click();
  //   fixture.detectChanges();

  //   const isVisible=!!compiled.querySelector('.cardContener');

  //   expect(isVisible).toBe(!wasVisible);
  // });

  it('should toggle "publish" true or false',()=>{
    const compiled =fixture.nativeElement;
    fixture.detectChanges();
    const button=compiled.querySelector('button');

    expect(component.article.isPublished).toBeTrue();
    button.click();
    fixture.detectChanges();
    expect(component.article.isPublished).toBeFalse();
    
  });

  it('should display article from @Input()',()=>{
    const mockArticle = { title: 'Test Article', likes: 0, isPublished: true } as any;
    component.article = mockArticle;
    fixture.detectChanges(); 

    const compiled = fixture.nativeElement;
    

    const h1Element = compiled.querySelector('h1');
    expect(h1Element).toBeTruthy(); 
    expect(h1Element.textContent).toContain('Test Article');
  })

  it('should emit an event when button is clicked', () => {
    
    const mockArticle = {
      id: 1,
      title: 'Test Article',
      likes: 0,
      isPublished: true
    } as any;
  
    component.article = mockArticle;
    fixture.detectChanges();
  
    spyOn(component.notifyLike, 'emit');
  
    const button = fixture.nativeElement.querySelector('.buttonLike');
    button.click();
  
    expect(component.notifyLike.emit).toHaveBeenCalledWith(`L'article "Test Article" vient d'être liké`);
  });
  
});
