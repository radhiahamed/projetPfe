import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private firestore: AngularFirestore) {}

  addReservation(reservation: any) {
    return this.firestore.collection('reservations').add(reservation);
  }
}
