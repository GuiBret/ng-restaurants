import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { RestaurantListItem } from 'src/app/interfaces/restaurant-list-item';
import { RestaurantList } from 'src/app/interfaces/restaurant-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  restaurantsList: RestaurantList;
  constructor(private listSvc: ListService) { }
  
  ngOnInit(): void {

    this.listSvc.newRestaurantsList.subscribe((newList: RestaurantList) => {
      
      this.restaurantsList = newList;
    })
  }

}
