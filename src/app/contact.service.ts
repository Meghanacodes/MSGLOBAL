import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor() {}

  sendEmail(formData: any): Promise<any> {
    const SERVICE_ID = 'service_81qipql';
    const TEMPLATE_ID = 'template_yrdocjw';
    const PUBLIC_KEY = 'Je9cS0ySWv7yM8ur-';

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
  }
}
