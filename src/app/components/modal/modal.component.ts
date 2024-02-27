import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ContactFormResponse,
  ContactFormService,
} from '../../contact-form.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit {
  faCircleXmark = faCircleXmark;
  contactForm: FormGroup;
  @Input() isSubmitted: boolean = false;
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private contactFormService: ContactFormService,
    private routes: Router
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  sendContactInfo(): void {
    const data = this.contactForm.value;
    const contactFormStatus = this.contactForm.status;
    this.contactFormService.postContactFormData(data).subscribe({
      next: (response: ContactFormResponse) => {
        if (contactFormStatus === 'VALID') {
          this.isSubmitted = true;
          console.log('Data posted successfully:', response);
        }
      },
      error: (error: string) => {
        console.error('Error posting data:', error);
      },
    });
  }

  onClose() {
    this.closeModal.emit();
    this.contactForm.reset();
    this.routes.navigate(['']);
  }

  resetForm() {
    this.isSubmitted = false;
    this.contactForm.reset();
    this.closeModal.emit();
    this.routes.navigate(['']);
  }
}
