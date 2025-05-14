import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private db: AngularFireDatabase) { }

  // Récupérer toutes les réservations avec les suggestions IA
  getReservations(): Observable<any> {
    return this.db.list('/reservations').valueChanges();
  }
  createReservation(reservation: any) {
    const newKey = this.db.list('reservations').push(null).key;
    const updates: any = {};
  
    updates[`/reservations/${newKey}`] = reservation;
    updates[`/reservations_pending/${newKey}`] = reservation;  // 🟡 C’est ce qu’attend ton script Colab
  
    return this.db.database.ref().update(updates);
  }
  

 
}
