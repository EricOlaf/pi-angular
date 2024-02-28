import { Component, Output } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { PiCardListComponent } from '../../components/pi-card-list/pi-card-list.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    ButtonComponent,
    PiCardListComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  piListHome = [
    { name: 'Eric', specialty: 'Dog Recovery' },
    { name: 'Ian', specialty: 'Alaskan stuff' },
    { name: 'Jackson', specialty: "Nova's dad" },
  ];
  selectPI() {
    console.log('Yeee yee');
  }
}
