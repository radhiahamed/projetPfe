import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private db: AngularFireDatabase) {}

  sendMessage(message: any) {
    this.db.list('/messages').push(message);
  }
}