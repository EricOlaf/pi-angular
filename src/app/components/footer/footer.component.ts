import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, ModalComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  isModalOpen: boolean = false

  openModal(){
    this.isModalOpen = true
  }
  onModalClose() {
    this.isModalOpen = false;
  }

}
