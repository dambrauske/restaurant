import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Restaurant } from '../../models/restaurant';
import { RestaurantService } from '../../services/restaurant.service';


@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css',
})
export class TopHeaderComponent {

}
