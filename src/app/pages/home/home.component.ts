import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { PiCardListComponent } from '../../components/pi-card-list/pi-card-list.component';
import { ButtonComponent } from '../../components/button/button.component';
import { PIProfileData, PiListService } from '../../pi-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonComponent,
    PiCardListComponent,
    RouterModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy{
  piProfiles: PIProfileData[] = [];
  subscription: Subscription | undefined;

  constructor(private piListService: PiListService) {}

  ngOnInit(): void {
    this.getPIList();
  }
  getPIList(): void {
   this.subscription=  this.piListService.getPIList().subscribe((piProfiles) => {
      this.piProfiles = piProfiles;
    });
  }
  selectPI() {
    console.log('Yeee yee');
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
