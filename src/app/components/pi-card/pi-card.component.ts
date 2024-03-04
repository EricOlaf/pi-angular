import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { PIProfileData, PiDetailsService } from '../../pi-details.service';
import { PiListService } from '../../pi-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pi-card',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule],
  templateUrl: './pi-card.component.html',
  styleUrl: './pi-card.component.css',
})
export class PiCardComponent implements OnDestroy {
  @Input() cardInfo: PIProfileData = {
    id: '',
    name: '',
    address: '',
    specialty: '',
    description: '',
    rating: 0,
    reviews: [],
  };
  piProfiles: PIProfileData[] = [];
  subscription: Subscription | undefined;

  constructor(private piDetails: PiDetailsService) {}

  selectPI(profileId: string) {
    this.subscription = this.piDetails
      .getProfileDetailsData(profileId)
      .subscribe();
    // DO I NEED ERROR HANDLING HERE?
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
