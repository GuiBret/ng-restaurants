import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HTTPService } from './shared/http.service';
import { ListService } from './list/list.service';

describe('AppComponent', () => {

  let httpServiceStub: Partial<HTTPService>,
      listSvcStub: Partial<ListService>;
  
  listSvcStub = {
    initList: function() {}
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {useValue: httpServiceStub, provide: HTTPService},
        {useValue: listSvcStub, provide: ListService},
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'restaurants'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('restaurants');
  });


});
