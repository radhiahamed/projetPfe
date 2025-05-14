import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
reviews: any;

  constructor(private contactService: ContactService, private db: AngularFireDatabase) {}
  sendComment() {
    this.db.list('/messages').push({
      restaurant: 'La Mascotte',
      comment: 'Excellent service !',
      date: new Date().toISOString()
    });
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.contactService.sendMessage(form.value);
      form.reset();
      alert('Message sent successfully!');
      
    }
  }
}