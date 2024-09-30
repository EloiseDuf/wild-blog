import { Component } from '@angular/core';
import { Contact } from '../../models/contact.models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  
  newContact: Contact = {
    lastname: "",
    firstname: "",
    email: "",
  };

  onSubmit(): void {
    alert('Envoyé');
    console.log(this.newContact);
  }
}
