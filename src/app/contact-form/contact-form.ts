import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {

  formData = {
    full_name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  };

  
  constructor(private contactService: ContactService) {}


  onSubmit() {
    this.contactService.sendEmail(this.formData)
      .then(() => {
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send. Please try again later.');
      });
  }


}
