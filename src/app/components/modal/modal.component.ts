import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,  ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  
  faCircleXmark= faCircleXmark
  
  contactForm : FormGroup

  @Input() isOpen: boolean = false
  
  @Output() closeModal = new EventEmitter<void>()

  constructor(private formBuilder: FormBuilder ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
     })
  }

  ngOnInit(): void {}

  sendContactInfo():void {
  console.log("CONTACT FORM SUBMITTED",this.contactForm)
  }

  onClose(){
    this.closeModal.emit()
  }
}


