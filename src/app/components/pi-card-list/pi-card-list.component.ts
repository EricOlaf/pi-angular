import { Component } from '@angular/core';
import { PiCardComponent } from '../pi-card/pi-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pi-card-list',
  standalone: true,
  imports: [PiCardComponent, CommonModule],
  templateUrl: './pi-card-list.component.html',
  styleUrl: './pi-card-list.component.css',
})
export class PiCardListComponent {
  cardArray: number[] = [1, 2, 3];
}