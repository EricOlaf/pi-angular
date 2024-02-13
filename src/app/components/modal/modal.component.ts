import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {

  faCircleXmark= faCircleXmark
  contactForm : FormGroup
  @Input() isSubmitted : boolean = false 
  @Input() isOpen: boolean = false
  @Output() closeModal = new EventEmitter<void>()

  constructor(private formBuilder: FormBuilder, private routes: Router) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
     })
  }

  ngOnInit(): void {}

  sendContactInfo():void {
    if (this.contactForm.status === "VALID"){
      this.isSubmitted = true
      console.log("CONTACT FORM SUBMITTED",this.contactForm)
    } else {
      console.log("CONTACT FORM ERROR please try again")
    }
  }

  onClose(){
    this.closeModal.emit()
    this.contactForm.reset();
    this.routes.navigate(['/']);
  }

  resetForm() {
    this.isSubmitted = false;
    this.contactForm.reset();
    this.closeModal.emit()
    this.routes.navigate(['/']);
  }
}


