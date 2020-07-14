import { Injectable } from '@angular/core';
import { HTTPService } from '../shared/http.service';
import { LatLng } from '../interfaces/lat-lng';
import { Subject } from 'rxjs';
import { StandardResponse } from '../interfaces/standard-response';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  newRestaurantsList = new Subject();
  newMarkersReceived = new Subject();
  constructor(private httpService: HTTPService) { }

  initList(position: LatLng) {
    
    this.httpService.getRestaurantsFromPosition(position).subscribe(this.handleNewRestaurantsList.bind(this));
  }

  handleNewRestaurantsList(response: any) {
    this.newRestaurantsList.next(response.data.businesses);
    this.newMarkersReceived.next(response.data.businesses.map((currBusiness) => [currBusiness.latitude, currBusiness.longitude]));
  }
}
