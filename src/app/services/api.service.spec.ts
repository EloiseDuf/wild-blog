import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { Article } from '../models/article.models';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({    
      imports: [HttpClientTestingModule],
      providers: [ApiService]});
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch data from API', () => {

    const mockArticle: Article = {
      id: 1,
      title: 'Test Article',
      content: 'Content of the article',
      author: 'Test Author',
      image:"",
      comment:"",
      likes:0,
      isPublished: true
    };

    service.getArticleById(1).subscribe(data => {
      expect(data).toEqual(mockArticle);
    });
  
    const req = httpMock.expectOne('http://localhost:8080/articles/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockArticle);
  });
});
