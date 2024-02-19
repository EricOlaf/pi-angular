import { Component, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PiCardListComponent } from '../../components/pi-card-list/pi-card-list.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ButtonComponent, PiCardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  selectPI() {
    console.log('PI SELECTED');
  }
}
