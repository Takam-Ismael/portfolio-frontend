// src/app/components/contact/contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    // In a real app, you would send the data to a backend service
    console.log('Form submitted:', this.formData);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.submitted = false;
      this.formData = { name: '', email: '', subject: '', message: '' };
    }, 3000);
  }
}