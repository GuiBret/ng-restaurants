import { Injectable } from '@angular/core';
import { MapService } from '../map/map.service';
import { ListService } from '../list/list.service';
import { HTTPService } from './http.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  coordsToDisplayChanged = new Subject();
  constructor(private mapSvc: MapService, private listSvc: ListService, private httpSvc: HTTPService) { }

  makeGeocodingSearch(searchString: string) {
    this.httpSvc.getGeocoding(searchString).subscribe(this.handleGeocodingResponse.bind(this));
    
  }

  handleGeocodingResponse(response: any) {
    if(response.data.results.length === 0) {

    } else {
      const resultKept = response.data.results[0];
      this.coordsToDisplayChanged.next([resultKept.latitude, resultKept.longitude]);
    }
  }
}
