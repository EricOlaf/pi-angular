import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pi-details',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './pi-details.component.html',
  styleUrl: './pi-details.component.css',
})

export class PiDetailsComponent {


  title: string = 'TITLE';
  name: string = 'Samantha Reed';
  rating: string = '88';
  ratingPercentage: string = `${this.rating}/100`;
  specialty: string = 'Fraud/Corporate Espionage';
  location: string = '789 Oak Ave, Suite B, Smalltown, TX 67890, USA';
  description: string =
    'Samantha Reed is an expert in corporate espionage and fraud investigation. She has a sharp mind and a vast network of informants, making her the go-to PI for businesses facing internal threats.';
  reviews: string =
    'Samantha was the best PI I could ever hope for blah blah blah blah';
}
