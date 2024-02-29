import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { PIProfileData, PiDetailsService } from '../../pi-details.service';
import { PiListService } from '../../pi-list.service';

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
  piProfiles: PIProfileData[] = [];

  constructor(
    private piListService: PiListService,
    private piDetails: PiDetailsService
  ) {}

  ngOnInit(): void {
    this.getPIList();
  }
  getPIList(): void {
    this.piListService.getPIList().subscribe((piProfiles) => {
      this.piProfiles = piProfiles;
    });
  }
  selectPI(profileId: string) {
    this.piDetails
      .getProfileDetailsData(profileId)
      .subscribe((profileDetails) => {
        console.log(profileDetails);
      });
  }
}
