import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pi-card',
  standalone: true,
  imports: [],
  templateUrl: './pi-card.component.html',
  styleUrl: './pi-card.component.css',
})
export class PiCardComponent {
  @Input() cardInfo: { name: string; specialty: string } = {
    name: '',
    specialty: '',
  };
}
