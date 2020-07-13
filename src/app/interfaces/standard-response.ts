import { RestaurantList } from './restaurant-list';

export interface StandardResponse {
    data: RestaurantList,
    errors: Array<any>

}
