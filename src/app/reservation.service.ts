import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private db: AngularFireDatabase) { }

  createReservation(reservation: any) {
    return this.db.list('reservations').push(reservation);
  }

  getReservations() {
    return this.db.list('reservations').valueChanges();
  }

 
}
