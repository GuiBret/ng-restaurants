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
    const httpOptions = {
      headers: {
        "Access-Control-Allow-Origin": '*'
      } 
    };

    const searchParams = {
      latitude: latLng.latitude.toString(),
      longitude: latLng.longitude.toString()
    };
    
    return this.http.get(environment.serverUrl + '/restaurants?' + new URLSearchParams(searchParams).toString());
  }

  getGeocoding(searchString: string) {
    const httpOptions = {
      headers: {
        "Access-Control-Allow-Origin": '*'
      }
    };

    return this.http.get(environment.serverUrl + '/geocoding?q=' + searchString, httpOptions); 
  }

  
}
