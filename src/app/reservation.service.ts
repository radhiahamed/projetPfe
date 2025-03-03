import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private firestore: AngularFirestore) {}

  addReservation(reservation: any) {
    return this.firestore.collection('reservations').add(reservation);
  }

  getReservations() {
    return this.firestore.collection('reservations').snapshotChanges();
  }

  deleteReservation(id: string) {
    return this.firestore.collection('reservations').doc(id).delete();
  }

  confirmReservation(id: string) {
    return this.firestore.collection('reservations').doc(id).update({ confirmed: true });
  }

  // Enregistrer le restaurant sélectionné dans Firestore
  saveRestaurant(restaurantName: string) {
    // Utiliser la collection correctement avec AngularFirestore
    return this.firestore.collection('reservations').add({ restaurantName, status: 'pending' });
  }
}
