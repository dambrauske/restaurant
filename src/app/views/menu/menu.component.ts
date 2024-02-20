import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  restaurantInfo!: Restaurant;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantInfo = this.restaurantService.getRestaurantInfo();
  }
}
