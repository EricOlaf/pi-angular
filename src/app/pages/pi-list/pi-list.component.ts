import { Component } from '@angular/core';
import { PiCardListComponent } from '../../components/pi-card-list/pi-card-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pi-list',
  standalone: true,
  imports: [PiCardListComponent, RouterLink, RouterOutlet],
  templateUrl: './pi-list.component.html',
  styleUrl: './pi-list.component.css',
})
export class PiListComponent {
  piListAll = [
    { name: 'Eric Ola', specialty: 'Dog Recovery' },
    { name: 'Ian Handy', specialty: 'Alaskan stuff' },
    { name: 'Jackson Mickey', specialty: "Nova's dad" },
    { name: 'Austin Tummy', specialty: 'EDM' },
    { name: 'Lewis Hamilton', specialty: 'Mercedes' },
    { name: 'Max Verstappen', specialty: 'Red Bull' },
    { name: 'Charles Leclerc', specialty: 'Ferrari' },
    { name: 'Lando Norris', specialty: 'Mclarren' },
  ];
}
