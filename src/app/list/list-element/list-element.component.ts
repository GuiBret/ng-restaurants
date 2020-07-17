import { Component, OnInit, Input } from '@angular/core';
import { RestaurantListItem } from 'src/app/interfaces/restaurant-list-item';
import { PageService } from 'src/app/shared/page.service';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {

  @Input() restaurant: RestaurantListItem;
  constructor(private pageSvc: PageService) { }

  ngOnInit(): void {
  }

  goToRestaurant() {
    this.pageSvc.goToRestaurant({latitude: parseFloat(this.restaurant.latitude), longitude: parseFloat(this.restaurant.longitude)});
  }

}
