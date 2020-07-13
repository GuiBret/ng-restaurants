import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  currCoords: [number, number];
  coordsToDisplayChanged = new Subject<any>();
  constructor() { }

  initMap(coords: [number, number]) {
    this.currCoords = coords;
    
    this.coordsToDisplayChanged.next(this.currCoords);
  }
}
