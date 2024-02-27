import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { HttpClientModule } from '@angular/common/http';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  providers: [RestaurantService],
})
export class MenuComponent implements OnInit {
  restaurantInfo!: Restaurant;
  dataReceived: boolean = false;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.getRestaurantInfo().subscribe({
      next: (res: any) => {
        if (res.data) {
          console.log(res.data);
          this.dataReceived = true;
          this.restaurantInfo = res.data;
        }
      },
    });
  }
}
