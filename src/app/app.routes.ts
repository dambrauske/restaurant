import { Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { MenuComponent } from './views/menu/menu.component';
import { ReservationComponent } from './views/reservation/reservation.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: '**', component: HomeComponent },
];
