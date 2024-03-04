import { Component } from '@angular/core';
import { PiCardListComponent } from '../../components/pi-card-list/pi-card-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PIProfileData, PiListService } from '../../pi-list.service';

@Component({
  selector: 'app-pi-list',
  standalone: true,
  imports: [PiCardListComponent, RouterLink, RouterOutlet],
  templateUrl: './pi-list.component.html',
  styleUrl: './pi-list.component.css',
})
export class PiListComponent {
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
}
