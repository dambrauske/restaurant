import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './views/about/about.component';
import { MenuComponent } from './views/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./views/home/home.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        MatButtonModule,
        MatIconModule,
        HeaderComponent,
        AboutComponent,
        MenuComponent,
        RouterLink,
        RouterLinkActive,
        HttpClientModule,
        FooterComponent,
        HomeComponent
    ]
})
export class AppComponent {
  title = 'project';
}
