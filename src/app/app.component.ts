import { Component } from '@angular/core';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { MapService } from './map/map.service';
import { ListService } from './list/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurants';

  constructor(private mapSvc: MapService, private listSvc: ListService) {}
  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.mapSvc.initMap([48.58392, 7.74553]);
    this.listSvc.initList({"latitude": 48.58392, "longitude": 7.74553});
  }
}
