import { Component, OnInit, Input } from '@angular/core';
import { RestaurantListItem } from 'src/app/interfaces/restaurant-list-item';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {

  @Input() restaurant: RestaurantListItem;
  constructor() { }

  ngOnInit(): void {
  }

}
