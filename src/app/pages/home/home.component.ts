import { Component, Output } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { PiCardListComponent } from '../../components/pi-card-list/pi-card-list.component';
import { ButtonComponent } from '../../components/button/button.component';
import { PIProfileData, PiListService } from '../../pi-list.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    ButtonComponent,
    PiCardListComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  piProfiles: PIProfileData[] = [];

  constructor(private piListService: PiListService) {}

  ngOnInit(): void {
    this.getPIList();
  }
  getPIList(): void {
    this.piListService.getPIList().subscribe((piProfiles) => {
      this.piProfiles = piProfiles;
    });
  }
  selectPI() {
    console.log('Yeee yee');
  }
}
