import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListService } from '../list.service';
import { RestaurantListItem } from 'src/app/interfaces/restaurant-list-item';
import { RestaurantList } from 'src/app/interfaces/restaurant-list';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  restaurantsList: RestaurantList;

  newRestaurantsList$: Subscription;
  constructor(private listSvc: ListService) { }
  
  ngOnInit(): void {

    this.newRestaurantsList$ = this.listSvc.newRestaurantsList.subscribe((newList: RestaurantList) => {
      
      this.restaurantsList = newList;
    })
  }

  ngOnDestroy() {
    this.newRestaurantsList$.unsubscribe();
  }

}
