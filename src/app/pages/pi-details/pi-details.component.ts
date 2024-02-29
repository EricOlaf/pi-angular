import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { PIProfileData, PiDetailsService } from '../../pi-details.service';
import {
  ActivatedRoute,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pi-details',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    RouterModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './pi-details.component.html',
  styleUrl: './pi-details.component.css',
})
export class PiDetailsComponent implements OnInit, OnDestroy {
  isSuccess: boolean = false;
  piProfileId: string = '';
  profileData: PIProfileData | undefined;
  title: string = 'PI Profile';
  subscription: Subscription | undefined;
  constructor(
    private route: ActivatedRoute,
    private piProfileService: PiDetailsService
  ) {}

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
      const id = params.get('id');
      if (id) {
        this.piProfileId = id;
        this.fetchPiProfile();
      }
      this.fetchPiProfile();
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
