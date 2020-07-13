import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng } from 'leaflet';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  options: any;
  mapCenter: [number, number];
  constructor(private mapSvc: MapService) { }

  ngOnInit(): void {
    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 15,
      center: latLng(46.879966, -121.726909)
    };

    this.mapCenter = latLng(46.879966, -121.726909);
    
    this.mapSvc.coordsToDisplayChanged.subscribe(this.handleMapCoordsChanged.bind(this));
  }
 
  handleMapCoordsChanged(coords: [number, number]) {
    console.log('Cords cha')
    this.mapCenter = latLng(coords[0], coords[1]);
  }



}
