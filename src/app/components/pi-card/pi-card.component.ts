import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pi-card',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule],
  templateUrl: './pi-card.component.html',
  styleUrl: './pi-card.component.css',
})
export class PiCardComponent {
  @Input() cardInfo: { name: string; specialty: string } = {
    name: '',
    specialty: '',
  };
}
