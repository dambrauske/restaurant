import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurantInfo: Restaurant = {
    name: 'El Restaurant',
    address: '23 Main St, Vilnius, Lithuania',
    phone: '+37000021001',
  }

  constructor() { }

  getRestaurantInfo() {
    return this.restaurantInfo
  }
}
