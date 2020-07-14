import { Component, OnInit, OnDestroy } from '@angular/core';
import { tileLayer, latLng, marker, icon } from 'leaflet';
import { MapService } from '../map.service';
import { ListService } from 'src/app/list/list.service';
import { PageService } from 'src/app/shared/page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {
  options: any;
  mapCenter: {lat: number, lng: number};
  layers: Array<any> = [];
  
  newMarkersReceived$: Subscription;
  coordsToDisplayChanged$: Subscription;

  operationRunning = false;
  constructor(private mapSvc: MapService, private listSvc: ListService, private pageSvc: PageService) {
    this.layers = [];
   }

  ngOnInit(): void {
    
    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 15,
      center: latLng(46.879966, -121.726909)
    };

    this.mapCenter = latLng(46.879966, -121.726909);
    
    // TODO : remove this line
    this.mapSvc.coordsToDisplayChanged.subscribe(this.handleMapCoordsChanged.bind(this));
    this.coordsToDisplayChanged$ = this.pageSvc.coordsToDisplayChanged.subscribe(this.handleMapCoordsChanged.bind(this));
    this.newMarkersReceived$ = this.listSvc.newMarkersReceived.subscribe(this.handleNewMarkers.bind(this));
  }

  ngOnDestroy() {
    this.newMarkersReceived$.unsubscribe();
    this.coordsToDisplayChanged$.unsubscribe();
  }
 
  handleMapCoordsChanged(coords: [number, number]) {
    
    this.mapCenter = latLng(coords[0], coords[1]);
    
  }

  handleNewMarkers(markers: Array<any>) {
    this.layers = markers.map((currMarker) => marker([currMarker[0], currMarker[1], {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 25, 41 ],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    }]));

    this.operationRunning = false;
  }

  /**
   * 
   * @param $event 
   */
  handleMapMoved() {
    if(!this.operationRunning) {
      this.operationRunning = true;
      
      this.listSvc.initList({latitude: this.mapCenter.lat, longitude: this.mapCenter.lng});
      this.operationRunning = false;
      // let newPosition = $event.target.animateToCenter;
      // console.log($event);
    }
    
  }



}
