import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { TopHeaderComponent } from "../top-header/top-header.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [NavbarComponent, TopHeaderComponent]
})
export class HeaderComponent {

}
