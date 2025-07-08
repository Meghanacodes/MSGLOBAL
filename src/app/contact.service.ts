import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor() {}

  sendEmail(formData: any): Promise<any> {
    const SERVICE_ID = 'service_aagcmok';
    const TEMPLATE_ID = 'template_hlfy2en';
    const PUBLIC_KEY = 'RWFLqy5caAhcWWC3j';

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
  }
}
