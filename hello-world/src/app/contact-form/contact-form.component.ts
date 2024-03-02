import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContactForm } from '../contact-form';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  // array of messages
  msgs: ContactForm[] = [];
  // counter
  count: number = 0;

  // FormGroup
  contactForm = new FormGroup({
    name: new FormControl(''),
    message: new FormControl(''),
  });

  // Send Button Handler
  onSubmit() {
    this.count++;
    const name = this.contactForm.value.name ?? '';
    const message = this.contactForm.value.message ?? '';
    this.msgs.push({ name: name, text: message, id: this.count });
  }
}
