import { TestBed } from '@angular/core/testing';

import { PageService } from './page.service';
import { ListService } from '../list/list.service';
import { MapService } from '../map/map.service';
import { HTTPService } from './http.service';

describe('PageService', () => {
  let service: PageService,
      listSvcStub: Partial<ListService>,
      mapSvcStub: Partial<MapService>,
      httpSvcStub: Partial<HTTPService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ListService, useValue: listSvcStub},
        {provide: MapService, useValue: mapSvcStub},
        {provide: HTTPService, useValue: httpSvcStub},
      ]
    });
    service = TestBed.inject(PageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
