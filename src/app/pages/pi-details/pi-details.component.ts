import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { PiDetailsService } from '../../pi-details.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pi-details',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './pi-details.component.html',
  styleUrl: './pi-details.component.css',
})
export class PiDetailsComponent implements OnInit, OnDestroy {
  
  @Input() isSuccess: boolean = false 
  
  piProfileId: any;
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


  constructor(
    private route: ActivatedRoute,
    private piProfileData: PiDetailsService,
    private subscription: Subscription
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe((params) => {
      this.piProfileId = params.get('id');
      this.fetchPiProfileId();
    });
  }

  fetchPiProfileId(): void {
    this.piProfileData
      .getProfileDetailsData(this.piProfileId)
      .subscribe((data) => {
        this.piProfileData = data;
this.isSuccess= true
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
