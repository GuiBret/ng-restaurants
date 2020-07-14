import {RestaurantListItem} from './restaurant-list-item';
export interface RestaurantList {
    [x: string]: unknown;
    [index: number]: RestaurantListItem;
}
