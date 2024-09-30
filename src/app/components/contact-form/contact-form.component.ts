import { Component } from '@angular/core';
import { Contact } from '../../models/contact.models';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  
  newContact: Contact = {
    lastname: "",
    firstname: "",
    email: "",
  };

  labels = {
    lastname: 'nom',
    firstname: 'prénom',
    email: 'email'
  };

  onSubmit(contactForm:NgForm): void {
    alert('Envoyé');
    console.log(this.newContact);
    contactForm.resetForm()
  }
}
