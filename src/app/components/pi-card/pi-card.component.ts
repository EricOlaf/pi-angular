import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { PIProfileData } from '../../pi-details.service';

@Component({
  selector: 'app-pi-card',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule],
  templateUrl: './pi-card.component.html',
  styleUrl: './pi-card.component.css',
})
export class PiCardComponent {
  @Input() cardInfo: PIProfileData = {
    id: '',
    name: '',
    address: '',
    specialty: '',
    description: '',
    rating: 0,
    // reviews: []
  };
}
