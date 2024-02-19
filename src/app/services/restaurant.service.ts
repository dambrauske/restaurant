import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private restaurantInfo: Restaurant = {
    name: 'El Restaurant',
    address: '23 Main St, Vilnius, Lithuania',
    phone: '+37000021001',
    menu: [
      {
        name: 'appetizers',
        items: [
          {
            name: 'Prawn salad',
            description:
              'Various salad, cucumber, avocado, cherry tomatoes, herb sauce, toast',
            price: 12.0,
          },
          {
            name: 'Buratta salad',
            description: 'Various salads, Burratta, mangoes, young beet leaves',
            price: 12.0,
          },
          {
            name: 'Tuna tartare',
            description:
              'Marinated shallot, whole grain mustard, "Masago" caviar, parsley oil',
            price: 15.0,
          },
          {
            name: 'Baked "Camambert" cheese',
            description: 'Cranberries, honey, hazelnuts, french toest',
            price: 14.0,
          },
        ],
      },
      {
        name: 'main dishes',
        items: [
          {
            name: 'Prawn salad',
            description:
              'Various salad, cucumber, avocado, cherry tomatoes, herb sauce, toast',
            price: 12.0,
          },
          {
            name: 'Buratta salad',
            description: 'Various salads, Burratta, mangoes, young beet leaves',
            price: 12.0,
          },
          {
            name: 'Tuna tartare',
            description:
              'Marinated shallot, whole grain mustard, "Masago" caviar, parsley oil',
            price: 15.0,
          },
          {
            name: 'Baked "Camambert" cheese',
            description: 'Cranberries, honey, hazelnuts, french toest',
            price: 14.0,
          },
        ],
      },
    ],
  };

  constructor() {}

  getRestaurantInfo() {
    return this.restaurantInfo;
  }
}
