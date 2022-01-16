import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/modules/shared/material.module';
import { NewsService } from '../../../services/news.service';

import { StoryComponent } from './story.component';

describe('StoryComponent', () => {
  let component: StoryComponent;
  let fixture: ComponentFixture<StoryComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeAll(waitForAsync(()=>{
    const mockActivateRoute = {
      snapshot: { 
        url: { toString: () => { return 'news/1'; } },
        params: { id: 1 }
      }
    }
    TestBed.configureTestingModule({
      declarations: [ StoryComponent ],
      imports: [ 
        RouterTestingModule.withRoutes([{path: 'news/:id', component: StoryComponent} ]),
        HttpClientTestingModule,
        MaterialModule,
        NoopAnimationsModule
      ],
      providers:[
        NewsService,
        { provide: ActivatedRoute, useValue: mockActivateRoute }
      ]
    }).compileComponents()
  }));

  beforeEach(() => {
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(StoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
