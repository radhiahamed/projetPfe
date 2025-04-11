import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
reviews: any;

  constructor(private contactService: ContactService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.contactService.sendMessage(form.value);
      form.reset();
      alert('Message sent successfully!');
      
    }
  }
}