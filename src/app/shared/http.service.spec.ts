import { TestBed } from '@angular/core/testing';

import { HTTPService } from './http.service';
import { HttpClient } from '@angular/common/http';

describe('HTTPService', () => {
  let service: HTTPService,
      httpClientStub: Partial<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: httpClientStub}
      ]
    });
    service = TestBed.inject(HTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
