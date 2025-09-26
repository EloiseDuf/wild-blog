import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormComponent],
      providers:[provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when email and password are empty', () => {
    component.user.email = '';
    component.user.password = '';
    fixture.detectChanges();
  
    const button = fixture.nativeElement.querySelector('button');
    
    expect(button.disabled).toBeTrue();
  });

});
