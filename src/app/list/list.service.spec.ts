import { TestBed } from '@angular/core/testing';

import { ListService } from './list.service';
import { HTTPService } from '../shared/http.service';

describe('ListService', () => {
  let service: ListService,
      httpServiceStub: Partial<HTTPService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {useValue: httpServiceStub, provide: HTTPService}
      ]
    });
    service = TestBed.inject(ListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
