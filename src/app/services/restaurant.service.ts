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
            name: 'Octopus',
            description:
              'Potato croquettes, celery cream, soybeans, onion sauce, herb butter',
            price: 25.0,
          },
          {
            name: 'Duck marinated in orange',
            description: 'Broccoli, cauliflower, sweet potatoes, marinated carrots, cherry sauce',
            price: 26.0,
          },
          {
            name: 'Tuna tartare',
            description:
              'Marinated shallot, whole grain mustard, "Masago" caviar, parsley oil',
            price: 15.0,
          },
          {
            name: 'Slow-roast pork ribs',
            description: 'Bacon wrapped potatoes, champignons, caramelized cabbage, barbecue and horseradish sauce',
            price: 24.50,
          },
          {
            name: 'Grilled avocado',
            description: 'Tomatoes salsa, „Halloumi“ cheese (can be changed to vegan „Feta“ cheese)',
            price: 14.00,
          },
        ],
      },
      {
        name: 'desserts',
        items: [
          {
            name: 'Homemade ice cream',
            description:
              'Homemade vanilla ice cream with strawberries',
            price: 5.0,
          },
          {
            name: 'Chocolate cake',
            description:
              'Chocolate cake with marzipan',
            price: 5.0,
          },
          {
            name: 'Chocolate souffle',
            description:
              'Chocolate souffle with fresh berries and raspberry sorbet',
            price: 7.0,
          },
        ]
      },
      {
        name: 'drinks',
        items: [
          {
            name: 'Espresso',
            description:
              '',
            price: 2.50,
          },
          {
            name: 'Latte',
            description:
              '',
            price: 3.0,
          },
          {
            name: 'Capuccino',
            description:
              '',
            price: 3.0,
          },
          {
            name: 'Black, fruit, green tea',
            description:
              '',
            price: 2.50,
          },
          {
            name: 'Irish coffee with whiskey',
            description:
              '',
            price: 4.50,
          },
        ]
      }
    ],
  };

  constructor() {}

  getRestaurantInfo() {
    return this.restaurantInfo;
  }
}
