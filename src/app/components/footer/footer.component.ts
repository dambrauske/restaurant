import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
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
