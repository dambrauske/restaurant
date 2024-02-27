import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  restaurantInfo!: Restaurant;
  dataReceived: boolean = false;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService.getRestaurantInfo().subscribe({
      next: (res: any) => {
        if (res.data) {
          this.dataReceived = true;
          this.restaurantInfo = res.data;
        }
      },
    });
  }
}
