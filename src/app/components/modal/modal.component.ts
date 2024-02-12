import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  faCircleXmark= faCircleXmark
  @Input() isOpen: boolean = false
  @Output() closeModal = new EventEmitter<void>()
  onClose(){
    this.closeModal.emit()
  }
}

