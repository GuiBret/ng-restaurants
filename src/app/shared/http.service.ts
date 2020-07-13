import { Injectable } from '@angular/core';
import { LatLng } from '../interfaces/lat-lng';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(private http: HttpClient) { }

  getRestaurantsFromPosition(latLng: LatLng) {
    let httpOptions = {
      headers: {
        "Access-Control-Allow-Origin": '*'
      }
    }
    return this.http.get(environment.serverUrl + '/restaurants?latitude=' + latLng.latitude +'&longitude='+ latLng.longitude, httpOptions);
  }
}
