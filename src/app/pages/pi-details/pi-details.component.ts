import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { PIProfileData, PiDetailsService } from '../../pi-details.service';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pi-details',
  standalone: true,
  imports: [CommonModule, FooterComponent, RouterModule,
    RouterLink,
    RouterOutlet,],
  templateUrl: './pi-details.component.html',
  styleUrl: './pi-details.component.css',
})
export class PiDetailsComponent implements OnInit, OnDestroy {
  isSuccess: boolean = false;
  piProfileId: any;
  profileData: PIProfileData | undefined;
  title: string = 'PI Profile';
  
  private subscription: Subscription = new Subscription();
  constructor(
    private route: ActivatedRoute,
    private piProfileService: PiDetailsService
  ) {
    this.subscription = new Subscription();
  }

  fetchPiProfile(): void {
    this.piProfileService.getProfileDetailsData(this.piProfileId).subscribe({
      next: (data: PIProfileData) => {
        this.isSuccess = true;
        this.profileData = data;
      },
      error: (error) => {
        console.log(error);
        this.isSuccess = false;
      },
    });
  }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe((params) => {
      this.piProfileId = params.get('id');
      this.fetchPiProfile();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
