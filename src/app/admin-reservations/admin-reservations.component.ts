import { Component } from '@angular/core';

interface Reservation {
  id: number;
  client: string;
  restaurant: string;
  table: string;
  datetime: Date;
  statut: string; // En attente, Confirmée, Annulée
}

@Component({
  selector: 'app-admin-reservations',
  templateUrl: './admin-reservations.component.html',
    styleUrls: ['./admin-reservations.component.css']  // ✅ ligne correcte

})
export class AdminReservationsComponent {
  reservations: Reservation[] = [
    { id: 1, client: 'Sophie', restaurant: 'La Mascotte', table: '5', datetime: new Date('2025-05-20T20:00'), statut: 'On hold' },
    { id: 2, client: 'Ahmed', restaurant: 'Le Raffiné', table: '3', datetime: new Date('2025-05-21T19:30'), statut: 'Confirmed' },
  ];

  onAddReservation() {
    // Implémenter l'ajout ou ouvrir un formulaire modale
  }

  onEditReservation(res: Reservation) {
    // Implémenter la modification (ex: formulaire modale)
  }

  onDeleteReservation(res: Reservation) {
    if(confirm(`Voulez-vous vraiment supprimer la réservation #${res.id} ?`)) {
      this.reservations = this.reservations.filter(r => r.id !== res.id);
    }
  }
}
